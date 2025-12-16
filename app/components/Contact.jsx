"use client";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-full flex flex-col justify-center items-center mx-auto px-[10%] py-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Request a call back</h2>

      <p className="mb-6" style={{ color: "#F7931E" }}>
        Send us an email and we’ll get in touch shortly, we would be delighted to speak.
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@omnireachtech.com&su=Recruitment%20Inquiry&body=Hello%20Omnireach%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20recruitment%20opportunities%20and%20services.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20discuss.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
        target="_blank"
        rel="noopener noreferrer"
        className="px-20 py-3 rounded-xl font-semibold shadow-lg transition hover:opacity-90"
        style={{ background: "linear-gradient(90deg, #F7931E, #1D2452)", color: "#fff", }}>
        Talk to a Recruitment Strategist
      </a>
    </div>
  );
}










// ------------------------------------------Old Code Below------------------------------------------
// "use client";
// import Box from '@mui/material/Box';
// import Alert from '@mui/material/Alert';
// import Button from '@mui/material/Button';
// import Snackbar from "@mui/material/Snackbar";
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';
// import CheckIcon from '@mui/icons-material/Check';
// import ErrorIcon from '@mui/icons-material/Error';
// import ClearIcon from "@mui/icons-material/Clear";
// import IconButton from "@mui/material/IconButton";
// import React, { useRef, useState, useEffect } from 'react';
// import CircularProgress from "@mui/material/CircularProgress";

// export default function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [resume, setResume] = useState(null);
//   const [message, setMessage] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [mounted, setMounted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [messageError, setMessageError] = useState(false);
//   const [alertSeverity, setAlertSeverity] = useState('success');

//   const form = useRef(null);
//   const fileInputRef = useRef(null);

//   // ✅ Email & Phone Validators
//   const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//   const validatePhone = (value) => /^\+?[0-9]{7,15}$/.test(value);

//   useEffect(() => {
//     if (feedback) {
//       const timer = setTimeout(() => {
//         setFeedback('');
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [feedback]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // validate required fields
//     setNameError(name === '' ? "Please enter your name" : false);
//     setMessageError(message === '' ? "Please enter the message" : false);

//     if (email === '') {
//       setEmailError("Please enter your email or phone number");
//     } else if (!validateEmail(email) && !validatePhone(email)) {
//       setEmailError("Enter a valid email or phone number");
//     } else {
//       setEmailError(false);
//     }

//     if (name && message && email && !emailError) {
//       try {
//         // helper function: convert file to base64
//         const toBase64 = (file) =>
//           new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result);
//             reader.onerror = (error) => reject(error);
//           });

//         let resumeData = null;
//         if (resume) {
//           resumeData = {
//             name: resume.name,
//             type: resume.type,
//             data: await toBase64(resume),
//           };
//         }

//         const res = await fetch("/api/send-email", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name,
//             email,
//             message,
//             resume: resumeData,
//           }),
//         });

//         const data = await res.json();

//         if (data.success) {
//           setFeedback("Mail has been sent successfully!");
//           setAlertSeverity("success");
//           setName("");
//           setEmail("");
//           setMessage("");
//           setResume(null);
//           if (fileInputRef.current) fileInputRef.current.value = "";
//         } else {
//           setFeedback(data.message || "Failed to send mail.");
//           setAlertSeverity("error");
//         }
//       } catch (error) {
//         setFeedback("Error sending mail.");
//         setAlertSeverity("error");
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="contact" className="h-full flex flex-col justify-center items-center mx-auto px-[10%] py-6 text-center">
//       <h2 className="text-3xl font-bold mb-6">Request a call back</h2>
//       <p className="text-gray-200" style={{ color: '#F7931E' }}>
//         Send us an email and we’ll get in touch shortly, we would be delighted to speak. 😊
//       </p>

//       <Box
//         ref={form}
//         component="form"
//         noValidate
//         autoComplete="off"
//         className="pt-5 w-full"
//         onSubmit={sendEmail}
//         onKeyDown={(e) => {
//           if (e.key === "Enter" && e.target.name !== "message") {
//             e.preventDefault();
//           }
//         }}
//       >
//         {/* Name & Email/Phone Fields */}
//         <div className="flex gap-[15px] pb-[15px]">
//           <TextField
//             required
//             name="name"
//             label="Your Name"
//             placeholder="What's your name?"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//               if (e.target.value.trim() !== "") setNameError(false);
//             }}
//             error={Boolean(nameError)}
//             helperText={nameError || ""}
//             InputProps={{ className: "bg-white text-black font-mono" }}
//             InputLabelProps={{ className: "text-[1.2rem] font-sans" }}
//             sx={{
//               "& input::placeholder": {
//                 fontFamily: "monospace",
//                 fontSize: "1rem",
//                 color: "rgba(0,0,0,1)",
//               },
//             }}
//             className="w-full"
//             disabled={loading}
//           />

//           <TextField
//             required
//             name="email"
//             label="Your Email or Phone"
//             placeholder="What's your email or phone?"
//             value={email}
//             onChange={(e) => {
//               const value = e.target.value.trim();
//               setEmail(value);

//               if (value === "") {
//                 setEmailError("Please enter your email or phone number");
//               } else if (!validateEmail(value) && !validatePhone(value)) {
//                 setEmailError("Enter a valid email or phone number");
//               } else {
//                 setEmailError(false);
//               }
//             }}
//             error={Boolean(emailError)}
//             helperText={emailError || ""}
//             InputProps={{ className: "bg-white text-black font-mono" }}
//             InputLabelProps={{ className: "text-[1.2rem] font-sans" }}
//             sx={{
//               "& input::placeholder": {
//                 fontFamily: "monospace",
//                 fontSize: "1rem",
//                 color: "rgba(0,0,0,1)",
//               },
//             }}
//             className="w-full"
//             disabled={loading}
//           />
//         </div>

//         <TextField
//           required
//           name="message"
//           label="Message"
//           placeholder="Feel free to send me any inquiries or questions."
//           multiline
//           rows={10}
//           value={message}
//           onChange={(e) => {
//             setMessage(e.target.value);
//             if (e.target.value.trim() !== "") setMessageError(false);
//           }}
//           error={Boolean(messageError)}
//           helperText={messageError || ""}
//           InputProps={{ className: "bg-white text-black font-mono" }}
//           InputLabelProps={{ className: "text-[1.2rem] font-sans" }}
//           sx={{
//             "& textarea::placeholder": {
//               fontFamily: "monospace",
//               fontSize: "1rem",
//               color: "rgba(0,0,0,1)",
//             },
//           }}
//           className="w-full mb-[5px]"
//           disabled={loading}
//         />

//         <TextField
//           type="file"
//           name="resume"
//           label="Upload Resume (PDF, DOC, DOCX)"
//           inputRef={fileInputRef}
//           InputLabelProps={{
//             shrink: true,
//             className: "text-[1.2rem] font-sans"
//           }}
//           inputProps={{
//             accept: ".pdf,.doc,.docx",
//           }}
//           sx={{
//             mt: 2,
//             '& .MuiOutlinedInput-root': {
//               height: '40px',
//               backgroundColor: 'white',
//               color: 'black',
//               fontFamily: 'monospace',
//               fontSize: '1rem',
//             },
//             '& input[type="file"]': {
//               height: '40px',
//               cursor: 'pointer',
//               color: 'rgba(0,0,0,0.6)',
//               fontFamily: 'monospace',
//               fontSize: '1rem',
//             },
//             '& input[type="file"]::file-selector-button': {
//               fontFamily: 'monospace',
//               fontSize: '0.9rem',
//               border: 'none',
//               padding: '8px 12px',
//               marginRight: '12px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               color: '#333',
//             },
//           }}
//           className="w-[50%] float-left"
//           onChange={(e) => setResume(e.target.files[0])}
//           disabled={loading}
//           InputProps={{
//             endAdornment: resume ? (
//               <IconButton
//                 onClick={() => {
//                   setResume(null);
//                   if (fileInputRef.current) {
//                     fileInputRef.current.value = "";
//                   }
//                 }}
//                 size="small"
//                 sx={{ ml: 1 }}
//                 disabled={loading}
//               >
//                 <ClearIcon fontSize="small" sx={{ color: "red" }} />
//               </IconButton>
//             ) : null,
//           }}
//         />

//         {/* ✅ Spinner inside Button */}
//         <Button
//           type="submit"
//           variant="contained"
//           className="float-right"
//           disabled={loading}
//           sx={{
//             marginTop: '15px',
//             backgroundColor: 'white',
//             color: '#050f0b',
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "8px",
//             '&:hover': {
//               backgroundColor: '#F7931E',
//               color: 'white',
//             },
//           }}
//         >
//           {loading ? (
//             <>
//               <CircularProgress size={20} color="inherit" /> Sending...
//             </>
//           ) : (
//             <>
//               Send <SendIcon className="text-base align-middle mr-1.5" />
//             </>
//           )}
//         </Button>

//         {feedback && (
//           <Snackbar
//             open={Boolean(feedback)}
//             anchorOrigin={{ vertical: "top", horizontal: "center" }}
//             autoHideDuration={10000}
//             onClose={() => setFeedback("")}
//           >
//             <Alert
//               icon={
//                 alertSeverity === "success"
//                   ? <CheckIcon fontSize="inherit" />
//                   : <ErrorIcon fontSize="inherit" />
//               }
//               severity={alertSeverity}
//               variant="filled"
//             >
//               {feedback}
//             </Alert>
//           </Snackbar>
//         )}
//       </Box>
//     </div>
//   );
// }

