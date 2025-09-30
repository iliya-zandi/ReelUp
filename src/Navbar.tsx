/**
 * Navbar Component
 * Renders a responsive navigation bar with a logo, navigation links, and action buttons.
 */
import React, { type FC } from "react";
import Navigation from "./components/Navigation";
import Button from "./components/Button";

/**
 * NavigationItem Interface
 * Represents a single navigation link item.
 * - text: the display text of the link
 * - link: the URL the link points to
 */
interface NavigationItem {
  text: string;
  link: string;
}

/**
 * navigationItems Array
 * Array of navigation link objects to render in the navbar.
 */
const navigationItems: NavigationItem[] = [
  { text: "Products", link: "/" },
  { text: "Customer Stories", link: "/" },
  { text: "Resources", link: "/" },
  { text: "Pricing", link: "/" },
];

/**
 * Navbar Functional Component
 * Combines logo, navigation links, and buttons into a responsive layout.
 */
const Navbar: FC = () => {
  return (
    /**
     * Navbar container
     * Main wrapper for the navigation bar.
     */
    <div className="navbar">
      {/**
       * Fluid container
       * Centers content with responsive padding.
       */}
      <div className="fluid lg:py-12 py-6 px-4 md:px-0">
        {/**
         * Flex container
         * Arranges logo, navigation, and buttons with wrapping and spacing.
         */}
        <div className="flex flex-wrap items-center lg:flex-nowrap justify-between">
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
           * Renders the navigation links using the Navigation component.
           */}
          <div className="order-1 w-full lg:w-auto lg:order-2 mt-4 lg:mt-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-zinc-800/10 flex justify-center">
            <Navigation items={navigationItems} />
          </div>

          {/**
           * Buttons section
           * Displays two action buttons: Book A Demo and Get Started.
           */}
          <div className="lg:w-auto w-2/3 order-0 lg:order-3 inline-flex items-center justify-end mt-4 lg:mt-0 gap-x-2 md:gap-x-4">
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
