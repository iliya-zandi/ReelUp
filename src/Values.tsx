/**
 * Values Component
 * Renders the "Our Values" section with text, call-to-action button, and image with overlay box.
 */
import React, { type FC } from "react";
import Overline from "./components/Overline";
import Button from "./components/Button";
import ValueImg from "./assets/images/values.jpg";

/**
 * Values Functional Component
 * Displays a two-column layout: text + button on the left, image + overlay on the right.
 */
const Values: FC = () => {
  return (
    /**
     * value container
     * Wraps the entire section with padding and fluid layout.
     */
    <div className="value box fluid">
      {/**
       * Section header
       * Centers overline and headline text.
       */}
      <div className="text-center max-w-3xl mx-auto">
        <Overline>our values</Overline>
        <h2 className="text-3xl md:text-6xl leading-normal font-bold text-zinc-900 mt-4">
          We Help People Create <br /> And Build Wealth
        </h2>
      </div>

      {/**
       * Grid container
       * Two-column layout with gap between columns.
       */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mt-16">
        {/** Left column - text content */}
        <div className="flex flex-col justify-center text-center md:text-left md:items-start items-center">
          <p className="text-xl leading-9 text-zinc-600 mb-6">
            We believe in empowering individuals to take control of their
            financial futures and unlock new opportunities for growth.
          </p>
          <p className="text-xl leading-9 text-zinc-600 mb-6">
            Our approach combines innovation and simplicity, making wealth
            creation accessible to everyone, everywhere.
          </p>
          <p className="text-xl leading-9 text-zinc-600 mb-8">
            By focusing on people first, we ensure lasting value and impact that
            drives long-term success.
          </p>

          {/** Call-to-action button */}
          <Button className="px-12 py-4" dark={true}>
            Learn More
          </Button>
        </div>

        {/** Right column - image with overlay box */}
        <div className="relative">
          {/**
           * Image element
           * Displays the main section image with object-cover and rounded corners.
           */}
          <img
            src={ValueImg}
            alt="Our Values"
            className="w-full h-96 object-cover rounded-4xl"
          />

          {/**
           * Overlay box
           * Positioned on top of the image to highlight key metric/statistic.
           */}
          <div className="absolute top-0 right-0 -mr-6 -mt-6 bg-black shadow-2xl rounded-4xl p-6 w-3/4 md:w-1/2 text-white">
            <span className="uppercase text-xs tracking-widest text-zinc-400">
              - committed to
            </span>
            <h3 className="text-3xl my-3 font-semibold">99%</h3>
            <span className="text-zinc-300 mt-2 tracking-wide">Up Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Default Export
 * Exports the Values component for use in other parts of the application.
 */
export default Values;
