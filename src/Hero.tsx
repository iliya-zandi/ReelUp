/**
 * Hero Component
 * Renders the hero section of the website with an overline, headline, description, and action buttons.
 */
import React, { type FC } from "react";
import Button from "./components/Button";
import Overline from "./components/Overline";

/**
 * Hero Functional Component
 * Displays the main hero content including title, description, and call-to-action buttons.
 */
const Hero: FC = () => {
  return (
    /**
     * hero container
     * Main wrapper for the hero section.
     */
    <div className="hero">
      {/**
       * fluid box
       * Centers content and applies responsive padding.
       */}
      <div className="fluid box text-center px-4 md:px-0">
        {/** Overline text */}
        <Overline>about us</Overline>

        {/**
         * Headline
         * Displays the main headline with responsive font sizes and spacing.
         */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-900 tracking-wider font-medium leading-snug mt-4">
          Most Powerful Way To <br />
          Connect Every Audience
        </h2>

        {/**
         * Description paragraph
         * Provides supporting text with responsive width and font size.
         */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 mt-6 mx-auto w-full sm:w-4/5 md:w-2/3">
          Since 2004, our technology has helped customers all over the world
          harness the incredible power of video - we even won two Technology
        </p>

        {/**
         * Buttons container
         * Displays two call-to-action buttons in a responsive layout.
         */}
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

/**
 * Default Export
 * Exports the Hero component for use in other parts of the application.
 */
export default Hero;
