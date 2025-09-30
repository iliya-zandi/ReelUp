/**
 * Navbar Component
 * Renders a responsive navigation bar with logo, navigation links, and action buttons.
 */
import React from "react";
import Navigation from "./components/Navigation";
import Button from "./components/Button";

/**
 * navigationItems Array
 * Defines the navigation links to display in the navbar.
 * Each item has text and a link URL.
 */
const navigationItems = [
  { text: "Products", link: "/" },
  { text: "Customer Stories", link: "/" },
  { text: "Resources", link: "/" },
  { text: "Pricing", link: "/" },
];

/**
 * Navbar Functional Component
 * Combines logo, navigation links, and buttons into a responsive layout.
 */
const Navbar = () => {
  return (
    /**
     * navbar container
     * Main wrapper for the navigation bar.
     */
    <div className="navbar">
      {/**
       * fluid container
       * Centers content with padding.
       */}
      <div className="fluid py-12">
        {/**
         * flex container
         * Arranges logo, navigation, and buttons horizontally with wrapping.
         */}
        <div className="flex flex-wrap items-center justify-between">
          {/**
           * Logo section
           * Displays the website logo on the left.
           */}
          <div className="lg:w-auto w-1/3 order-0">
            <a href="/" className="inline-block pr-2">
              <h1 className="text-2xl font-bold text-zinc-900">
                <span>ReelUp.</span>
              </h1>
            </a>
          </div>

          {/**
           * Navigation section
           * Displays the navigation links, responsive for mobile and desktop.
           */}
          <div className="order-1 w-full lg:w-auto lg:order-2 mt-6 lg:mt-0 lg:border-t-0 lg:pt-0 border-t pt-4 border-zinc-800/10">
            <Navigation items={navigationItems} />
          </div>

          {/**
           * Buttons section
           * Displays two action buttons on the right side: Book A Demo and Get Started.
           */}
          <div className="lg:w-auto w-2/3 order-0 lg:order-3 inline-flex items-center justify-end">
            <Button
              link="https://github.com/iliya-zandi"
              className="md:py-3 md:px-6 border-0"
            >
              Book A Demo
            </Button>
            <Button
              link="https://github.com/iliya-zandi"
              className="md:py-3 md:px-6"
              dark={true}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Default Export
 * Exports the Navbar component for use in other parts of the application.
 */
export default Navbar;
