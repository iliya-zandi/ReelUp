import React from "react";
import Button from "./components/Button";
import Overline from "./components/Overline";

const Hero = () => {
  return (
    <div className="hero">
      <div className="fluid box text-center px-4 md:px-0">
        <Overline>about us</Overline>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-900 tracking-wider font-medium leading-snug mt-4">
          Most Powerful Way To <br />
          Connect Every Audience
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 mt-6 mx-auto w-full sm:w-4/5 md:w-2/3">
          Since 2004, our technology has helped customers all over the world
          harness the incredible power of video - we even won two Technology
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 mt-8 justify-center">
          <Button
            className="py-3 sm:py-4 px-8 sm:px-12 w-full sm:w-auto"
            dark={true}
          >
            Get Started - For Free
          </Button>
          <Button className="py-3 sm:py-4 px-8 sm:px-12 w-full sm:w-auto">
            Book A Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
