/**
 * Button Component
 * A customizable button component for React applications.
 * Supports optional dark mode, additional class names, and optional link wrapping.
 */
import React, { type ButtonHTMLAttributes } from "react";

/**
 * ButtonProps Interface
 * Extends the default HTML button attributes and adds custom props:
 * - children: React nodes inside the button
 * - dark: optional boolean to enable dark mode styling
 * - className: optional string for additional CSS classes
 * - link: optional string URL to wrap the button in a clickable link
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  link?: string;
}

/**
 * Button Functional Component
 * Renders a styled button element with optional dark theme and link overlay.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  dark = false,
  link,
  className = "",
  ...rest
}) => {
  /**
   * buttonClass
   * Constructs the CSS classes for the button.
   * Includes base styles, dark mode styles (if dark=true), and any additional className.
   */
  const buttonClass = `relative rounded-full px-5 py-1.5 border border-zinc-900/40 font-medium text-sm ${
    dark ? "bg-[#131313] text-zinc-100" : ""
  } ${className}`;

  return (
    /**
     * button element
     * Applies buttonClass and spreads additional props from rest.
     */
    <button className={buttonClass} {...rest}>
      {/**
       * link overlay
       * If a link prop is provided, renders an absolutely positioned <a> covering the button.
       */}
      {link && <a href={link} className="absolute top-0 left-0 inset-0"></a>}

      {/**
       * children
       * Renders the content inside the button.
       */}
      {children}
    </button>
  );
};

/**
 * Default Export
 * Exports the Button component for use in other parts of the application.
 */
export default Button;
