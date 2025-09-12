"use client";
import ImageSlider from "./ImageSlider";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center px-6 sm:px-10 py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-5 text-center">
        About Us
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#F7931E" }}>
        We are OmniReach Technologies, and we are dedicated to offering reliable services.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-5xl w-full">
        {/* Left Column - Text */}
        <div className="text-base sm:text-l leading-relaxed text-justify space-y-6 h-full">
          <p className="mb-10 text-sm sm:text-base">
            As the business world continues to grow and develop, new technologies are appearing to help keep up with demand.
            These technologies can change as rapidly as the rest of the business landscape, and it can sometimes feel hard to
            keep up with. Our IT services can help smooth the path between technology and business, helping to keep companies
            competitive without being forced to hire an expensive in-house team, or waste the valuable time of staff that are
            trained to do other things. We offer reliable solutions that are more than just a few techs on staff to help you
            get through software upgrades. We can help you increase efficiency, minimize costs, and add in new technologies
            without compromising on quality. Our expert knowledge can point you to a path that you may not otherwise have taken
            but will help reduce costs and increase efficiency. With today’s businesses already being stretched thin with the
            pressures to keep up with customers and other competing firms, it can be hard to think about other important things
            such as business security and streamlining currently.
          </p>
        </div>

        {/* Right Column - Slider */}
        <div className="flex justify-center h-full">
          <div className="w-full h-full">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
