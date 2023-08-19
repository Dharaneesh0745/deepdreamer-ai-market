import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="z-10 relative container mx-auto px-5 py-24 text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Deep Dreamer
          </h1>
          <p className="hidden lg:inline-block whitespace-pre-line title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            AI - Market
          </p>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:items-center">
            <button className="mt-4 md:mt-0 md:mr-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="mt-4 md:mt-0 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
