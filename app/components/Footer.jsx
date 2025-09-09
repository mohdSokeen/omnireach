import XIcon from "@mui/icons-material/X";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start max-w-[1200px] mx-auto px-5 gap-8">
        {/* Column 1: Logo */}
        <div className="flex-1 min-w-[200px] text-center md:text-left mt-[-35px]">
          <img
            src="/images/logo2.png"
            alt="MWBE Certification Logo"
            className="mx-auto md:mx-0 max-w-full h-[150px] object-contain"
          />
        </div>

        {/* Column 2: Certification */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <p className="text-sm leading-relaxed">
            Omnireach is a trusted consulting partner, bridging top talent with leading organizations 
            through innovative staffing solutions, industry expertise, and a commitment to lasting career success.
          </p>
        </div>

        {/* Column 3: Contact */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h4 className="font-semibold" style={{ color: '#F7931E' }}>Contact Us</h4>
          <p className="my-1 text-sm">
            <PhoneIcon className="!mr-2 !text-[20px]" />
            {process.env.NEXT_PUBLIC_PHONE}</p>
          <p className="my-1 text-sm">
            <EmailIcon className="!mr-2 !text-[20px]" />
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </p>
          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-[#0A66C2] transition duration-300"
            >
              <LinkedInIcon className="!text-[#0A66C2] group-hover:!text-white !text-[28px]" />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_X}
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
          <h4 className="font-semibold" style={{ color: '#F7931E' }}>Address</h4>
          <p className="my-1 text-sm leading-tight">
            <LocationOnIcon className="!mr-1 !text-[20px]" /> {process.env.NEXT_PUBLIC_ADDRESS}
          </p>
          <div className="mt-3">
            <iframe
              title="Diverse Lynx India Office Location"
              src={process.env.NEXT_PUBLIC_MAP_LOCATION}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[100px]"
            />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center mt-8 text-sm w-full">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Omnireach Technology</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
