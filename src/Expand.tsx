/**
 * Expand Component
 * Renders a section with an image, a highlight box, text, and a call-to-action button.
 */
import React, { type FC } from "react";
import Button from "./components/Button";
import ExpandImg from "./assets/images/expanding.jpg";
import Overline from "./components/Overline";

/**
 * Expand Functional Component
 * Displays a two-column layout with an image and overlay box on one side, and text + button on the other.
 */
const Expand: FC = () => {
  return (
    /**
     * expand container
     * Wraps the entire section with responsive padding and layout.
     */
    <div className="expand box fluid">
      {/**
       * Grid container
       * Creates a two-column responsive layout with gap between items.
       */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-x-40">
        {/** Image + highlight box section */}
        <div className="relative">
          {/**
           * Image element
           * Displays the main section image with object-cover and rounded corners.
           */}
          <img
            src={ExpandImg}
            alt="Expand Section"
            className="w-full h-96 object-cover rounded-4xl"
          />

          {/**
           * Highlight box overlay
           * Positioned over the image to show key statistics.
           */}
          <div className="absolute md:top-0 md:right-0 md:-mr-6 md:-mt-6 bg-white shadow-2xl rounded-4xl p-6 text-center md:text-left w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-6 md:-translate-y-6 md:w-1/2">
            <span className="uppercase text-xs tracking-widest text-zinc-500">
              - up to
            </span>
            <h3 className="text-3xl my-3 font-semibold text-zinc-900">+200%</h3>
            <span className="text-zinc-600 mt-2 tracking-wide">
              Returns on <br />
              investment
            </span>
          </div>
        </div>

        {/** Text + button section */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
          {/** Overline label */}
          <Overline>shoppable projects</Overline>

          {/** Headline */}
          <h2 className="text-5xl mt-6 md:text-5xl font-bold text-zinc-900">
            Expanding the <br />
            Boundaries
          </h2>

          {/** Call-to-action button */}
          <Button className="mt-8 px-12 py-4" dark={true}>
            Get Started!
          </Button>
        </div>
      </div>
    </div>
  );
};

/**
 * Default Export
 * Exports the Expand component for use in other parts of the application.
 */
export default Expand;
