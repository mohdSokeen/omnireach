// app\components\Home.jsx
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMicrochip, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const lottieStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  left: "50%",
  transform: "translateX(-50%)",
};

const labels = [
  {
    icon: faClock,
    title: "Deliver",
    description:
      "With a talent database of over 300,000 middle to C-level specialists, we are always at the top of our game. You can rest assured that no deadline or agreement will be broken.",
  },
  {
    icon: faMicrochip,
    title: "Tools and technologies",
    description:
      "Our technical team master a comprehensive set of tools and technologies during project development.",
  },
  {
    icon: faHandsHelping,
    title: "Care",
    description:
      "We see people not as a disposable resource but as the businesses’ primary asset and build human-to-human connections with clients, partners, talents, and employees.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-auto px-[8%] py-6 text-center" id="home">
      {/* why choose us */}
      <div className="flex flex-col text-center">
        <h2 className="text-3xl font-bold">What Makes Us Different</h2>

        {/* grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {labels.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#272822] rounded-2xl p-6 shadow-md font-mono flex flex-col items-start gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={item.icon} size="2x" className="text-[#0d1116]" />
              <h3 className="text-lg font-semibold text-[#1D2452] text-left mt-2" style={{ color: '#F7931E' }}>{item.title}</h3>
              <p className="text-m leading-relaxed text-[#1D2452] text-left" style={{ color: '#1D2452' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[118%] h-68 overflow-hidden mt-12">
        <DotLottieReact
          src="/images/home.lottie"
          loop
          autoplay
          style={lottieStyle}
        />
      </div>


      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#F7931E' }}>Mission</h2>
          <p className="leading-relaxed text-m" style={{ color: '#1D2452' }}>
            Our mission is to transform recruitment into a faster, fairer, and more reliable process.
            We combine AI-powered tools with human expertise to connect businesses with the right talent quickly,
            and to guide consultants toward opportunities where they can thrive. By operating with transparency
            and accountability, we aim to build long-term partnerships that redefine how hiring gets done.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#F7931E' }}>Vision</h2>
          <p className="leading-relaxed text-m" style={{ color: '#1D2452' }}>
            Our vision is to harness the power of AI to make hiring faster, smarter, and more transparent.
            At OmniReach Technology, we aim to simplify placements for consultants, give clients confidence
            in every hire, and become a key player in shaping the future of recruitment.
          </p>
        </div>
      </div>

    </div>
  );
}
