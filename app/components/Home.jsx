// app/components/Home.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMicrochip, faHandsHelping, } from "@fortawesome/free-solid-svg-icons";

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
  const lottieContainerRef = useRef(null);
  const [lottieKey, setLottieKey] = useState(0);

  // ✅ Universal resize handling (Windows / macOS / Linux / iOS / Android)
  useEffect(() => {
    if (!lottieContainerRef.current) return;

    const observer = new ResizeObserver(() => {
      setLottieKey((prev) => prev + 1);
    });
    observer.observe(lottieContainerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-auto px-[8%] py-10 text-center" id="home">
      {/* Why choose us */}
      <div className="flex flex-col text-center">
        <h2 className="text-3xl font-bold">What Makes Us Different</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {labels.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#272822] rounded-2xl p-6 shadow-md font-mono flex flex-col items-start gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={item.icon} size="2x" className="text-[#0d1116]" />
              <h3 className="text-lg font-semibold text-left mt-2" style={{ color: "#F7931E" }}>{item.title}</h3>
              <p className="text-m leading-relaxed text-left" style={{ color: "#1D2452" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Responsive Lottie (fixed properly) */}
      <div
        ref={lottieContainerRef}
        className="relative w-full max-w-5xl mx-auto h-[220px] sm:h-[300px] md:h-[380px] mt-12 overflow-hidden"
      >
        <DotLottieReact
          key={lottieKey}
          src="/images/home.lottie"
          loop
          autoplay
          renderer="canvas"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Mission & Vision */}
      <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-lg">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "#F7931E" }}
          >
            Mission
          </h2>
          <p className="leading-relaxed text-m" style={{ color: "#1D2452" }}>
            Our mission is to transform recruitment into a faster, fairer, and
            more reliable process. We combine AI-powered tools with human
            expertise to connect businesses with the right talent quickly.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-lg">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "#F7931E" }}
          >
            Vision
          </h2>
          <p className="leading-relaxed text-m" style={{ color: "#1D2452" }}>
            Our vision is to harness the power of AI to make hiring faster,
            smarter, and more transparent.
          </p>
        </div>
      </div>
    </div>
  );
}
