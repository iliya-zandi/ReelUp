/**
 * Navigation Component
 * Renders a responsive navigation menu with a list of links.
 * Supports optional custom class names for styling.
 */
import React, { type FC } from "react";

/**
 * NavigationItem Interface
 * Represents a single navigation item.
 * - text: display text of the link
 * - link: URL the link points to
 * - className: optional additional CSS classes for the link
 */
interface NavigationItem {
  text: string;
  link: string;
  className?: string;
}

/**
 * NavigationProps Interface
 * Defines props for the Navigation component:
 * - items: array of NavigationItem objects to render
 * - className: optional additional CSS classes applied to each link
 */
interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

/**
 * Navigation Functional Component
 * Renders a <nav> element containing an unordered list of navigation links.
 */
const Navigation: FC<NavigationProps> = ({ items, className = "" }) => {
  return (
    <ul className="flex justify-start flex-row gap-x-8 lg:gap-x-2 items-center">
      {items.map((item, index) => (
        /**
         * li element
         * Wraps each navigation link.
         */
        <li key={index}>
          {/**
           * a element
           * Renders the clickable link with text and optional className.
           */}
          <a
            className={`text-zinc-800 font-normal md:px-4 px-0 grow md:py-2 ${className}`}
            href={item.link}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

/**
 * Default Export
 * Exports the Navigation component for use in other parts of the application.
 */
export default Navigation;
