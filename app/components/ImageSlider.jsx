"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const images = [
  "/images/about1.lottie",
  "/images/about2.lottie",
  "/images/about3.lottie",
];

const lottieStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,    // 3s
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <div className="relative w-full h-72 sm:h-100 overflow-hidden">
              <DotLottieReact
                src={src}
                loop
                autoplay
                style={lottieStyle}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Override slick dots */}
      <style jsx global>{`
        .slick-dots li button:before {
          font-size: 10px;
          color: #f7931e;
          opacity: 0.4;
          margin-top: 10px;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #f7931e;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
