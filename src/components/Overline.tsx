/**
 * Overline Component
 * A small, styled text container for overline or label-like content.
 * Supports optional custom class names.
 */
import React, { type FC } from "react";

/**
 * OverlineProps Interface
 * Defines props for the Overline component:
 * - children: React nodes to be displayed inside the overline
 * - className: optional string for additional CSS classes
 */
interface OverlineProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Overline Functional Component
 * Renders a div styled as an overline/label.
 */
const Overline: FC<OverlineProps> = ({ children, className = "" }) => {
  /**
   * overlineClass
   * Constructs the CSS classes for the overline element.
   * Includes responsive text sizes, uppercase letters, border, padding, and optional custom classes.
   */
  const overlineClass = `md:text-sm text-xs uppercase font-medium tracking-widest text-zinc-700 border border-zinc-950/40 inline-block rounded-full md:px-6 px-4 md:py-2 py-1 ${className}`;

  return (
    /**
     * div element
     * Displays the children with the overline styling.
     */
    <div className={overlineClass}>{children}</div>
  );
};

/**
 * Default Export
 * Exports the Overline component for use in other parts of the application.
 */
export default Overline;
