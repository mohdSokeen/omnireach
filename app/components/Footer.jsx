import XIcon from "@mui/icons-material/X";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mt-8">

      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start max-w-[1100px] mx-auto px-5 gap-8">
        {/* Column 1: Logo */}
        <div className="flex-1 min-w-[200px] text-center md:text-left mt-[-35px]">
          <img
            src="/images/logo2.png"
            alt="MWBE Certification Logo"
            className="mx-auto md:mx-0 max-w-full h-[150px] object-contain !mr-60"
          />
        </div>

        {/* Column 2: Certification */}
        <div className="flex-1 min-w-[200px] flex justify-center">
          <p className="text-sm leading-relaxed">
            Omnireach is a trusted consulting partner, bridging top talent with leading organizations
            through innovative staffing solutions, industry expertise, and a commitment to lasting career success.
          </p>
        </div>

        {/* Column 3: Contact */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h4 className="font-semibold !mr-25" style={{ color: '#F7931E' }}>Contact Us</h4>
          <p className="my-1 text-sm !mr-22">
            <PhoneIcon className="!mr-2 !text-[20px]" />
            01204332188
          </p>
          <p className="my-1 text-sm">
            <EmailIcon className="!mr-2 !text-[20px]" />
            <a
              href="mailto:hr@omnireachtech.com"
              className="text-blue-600 hover:underline"
            >
              hr@omnireachtech.com
            </a>

          </p>
          <div className="flex gap-4 mt-3 !mr-30 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/company/omrtech/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-[#0A66C2] transition duration-300"
            >
              <LinkedInIcon className="!text-[#0A66C2] group-hover:!text-white !text-[28px]" />
            </a>
            <a
              href="https://x.com/omnireachtech"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-black transition duration-300"
            >
              <XIcon className="!text-black group-hover:!text-white !text-[26px]" />
            </a>
          </div>
        </div>

        {/* Column 4: Address & Map */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h4 className="font-semibold !mr-63" style={{ color: '#F7931E' }}>Address</h4>
          <p className="my-1 text-sm !mr-35 whitespace-nowrap">
            <LocationOnIcon className="!mr-1 !text-[20px] " /> Noida, Uttar Pradesh, IN
          </p>
          <p className="my-1 text-sm !mr-30 md:whitespace-nowrap whitespace-normal">
            <LocationOnIcon className="!mr-1 !text-[20px]" /> 308 Flint Rd, Langhorne, PA 19047, US
          </p>
          <div className="mt-3">
            <iframe
              title="Diverse Lynx India Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923289947!2d77.23701161849016!3d28.522404036068785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1757098468801!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[100px]"
            />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center mt-5 text-sm w-full">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Omnireach Technology</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
