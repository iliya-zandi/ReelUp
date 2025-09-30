/**
 * Footer Component
 * Renders the website footer with logo, description, contact button, and copyright notice.
 */
import React, { type FC } from "react";
import Button from "./components/Button";

/**
 * Footer Functional Component
 * Displays footer content in a centered layout with styling for text and buttons.
 */
const Footer: FC = () => {
  return (
    /**
     * footer container
     * Wraps the entire footer section with fluid layout, text styling, and padding.
     */
    <footer className="footer box fluid text-center text-sm text-zinc-500">
      {/** Website logo / brand name */}
      <h1 className="text-4xl font-bold text-zinc-900 mb-4">ReelUp.</h1>

      {/** Footer description */}
      <p className="max-w-md mx-auto text-zinc-600 mb-2">
        Since 2004, our technology has helped businesses around the globe
        connect with their audience and grow faster than ever.
      </p>

      {/** Contact button */}
      <Button link="https://github.com/iliya-zandi" className="mt-4 px-8 py-4">
        Contact Us
      </Button>

      {/** Copyright notice */}
      <p className="mt-6">
        © {new Date().getFullYear()} ReelUp. All rights reserved.
      </p>
    </footer>
  );
};

/**
 * Default Export
 * Exports the Footer component for use in other parts of the application.
 */
export default Footer;
