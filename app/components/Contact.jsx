"use client";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from "@mui/material/Snackbar";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import React, { useRef, useState, useEffect } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [mounted, setMounted] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');

  const form = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [feedback]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sendEmail = async (e) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
    setResumeError(!resume);

    if (name && email && message && resume) {
      try {
        const toBase64 = (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          });

        const resumeBase64 = await toBase64(resume);

        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
            resume: {
              name: resume.name,
              type: resume.type,
              data: resumeBase64,
            },
          }),
        });

        const data = await res.json();

        if (data.success) {
          setFeedback("Mail has been sent successfully!");
          setAlertSeverity("success");
          setName("");
          setEmail("");
          setMessage("");
          setResume(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
        } else {
          setFeedback(data.message || "Failed to send mail.");
          setAlertSeverity("error");
        }
      } catch (error) {
        setFeedback("Error sending mail.");
        setAlertSeverity("error");
      }
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center mx-auto px-[10%] py-22 text-center"
    >
      <h2 className="text-3xl font-bold mb-[50px]">Request a call back</h2>
      <p className="text-gray-200" style={{ color: '#F7931E' }}>
        Send us an email and we’ll get in touch shortly, or phone between 7:00 PM and 04:00 AM (IST) Monday to Friday.
        <br/>we would be delighted to speak. 😊
      </p>

      <Box
        ref={form}
        component="form"
        noValidate
        autoComplete="off"
        className="pt-5 w-full"
        onSubmit={sendEmail}
      >
        <div className="flex gap-[15px] pb-[15px]">
          <TextField
            required
            name="name"
            label="Your Name"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError ? "Please enter your name" : ""}
            InputProps={{
              className: "bg-white text-black font-mono",
            }}
            InputLabelProps={{
              className: "text-[1.2rem] font-sans",
            }}
            sx={{
              "& input::placeholder": {
                fontFamily: "monospace",
                fontSize: "1rem",
                color: "rgba(0,0,0,1)",
              },
            }}
            className="w-full"
          />

          <TextField
            required
            name="email"
            label="Your Email or Phone"
            placeholder="What's your email or phone?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? "Please enter your email" : ""}
            InputProps={{
              className: "bg-white text-black font-mono",
            }}
            InputLabelProps={{
              className: "text-[1.2rem] font-sans",
            }}
            sx={{
              "& input::placeholder": {
                fontFamily: "monospace",
                fontSize: "1rem",
                color: "rgba(0,0,0,1)",
              },
            }}
            className="w-full"
          />
        </div>

        <TextField
          required
          name="message"
          label="Message"
          placeholder="Feel free to send me any inquiries or questions."
          multiline
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={messageError}
          helperText={messageError ? "Please enter the message" : ""}
          InputProps={{
            className: "bg-white text-black font-mono",
          }}
          InputLabelProps={{
            className: "text-[1.2rem] font-sans",
          }}
          sx={{
            "& textarea::placeholder": {
              fontFamily: "monospace",
              fontSize: "1rem",
              color: "rgba(0,0,0,1)",
            },
          }}
          className="w-full mb-[5px]"
        />

        <TextField
          required
          type="file"
          name="resume"
          label="Upload Resume (PDF, DOC, DOCX)"
          inputRef={fileInputRef}
          InputLabelProps={{
            shrink: true,
            className: "text-[1.2rem] font-sans"
          }}
          inputProps={{
            accept: ".pdf,.doc,.docx",
          }}
          sx={{
            mt: 2,
            '& .MuiOutlinedInput-root': {
              height: '40px',
              backgroundColor: 'white',
              color: 'black',
              fontFamily: 'monospace',
              fontSize: '1rem',
            },
            '& input[type="file"]': {
              height: '40px',
              cursor: 'pointer',
              color: 'rgba(0,0,0,0.6)',
              fontFamily: 'monospace',
              fontSize: '1rem',
            },
            '& input[type="file"]::file-selector-button': {
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              border: 'none',
              padding: '8px 12px',
              marginRight: '12px',
              borderRadius: '4px',
              cursor: 'pointer',
              color: '#333',
            },
          }}
          className="w-[50%] float-left"
          onChange={(e) => setResume(e.target.files[0])}
          error={resumeError}
          helperText={resumeError ? 'Please select resume' : ''}
          InputProps={{
            endAdornment: resume ? (
              <IconButton
                onClick={() => {
                  setResume(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
                size="small"
                sx={{ ml: 1 }}
              >
                <ClearIcon fontSize="small" sx={{ color: "#F7931E" }} />
              </IconButton>
            ) : null,
          }}
        />

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon className="text-base align-middle mr-1.5" />}
          className="float-right"
          sx={{
            marginTop: '15px',
            backgroundColor: 'white',
            color: '#050f0b',
            '&:hover': {
              backgroundColor: '#F7931E',
              color: 'white',
            },
          }}
        >
          Send
        </Button>

        {feedback && (
          <Snackbar
            open={Boolean(feedback)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={10000}
            onClose={() => setFeedback("")}
          >
            <Alert
              icon={
                alertSeverity === "success"
                  ? <CheckIcon fontSize="inherit" />
                  : <ErrorIcon fontSize="inherit" />
              }
              severity={alertSeverity}
              variant="filled"
            >
              {feedback}
            </Alert>
          </Snackbar>
        )}
      </Box>
    </div>
  );
}
