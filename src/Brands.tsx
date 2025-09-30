/**
 * Brands Component
 * Displays a section highlighting brands that use or support the company.
 */
import React, { type FC } from "react";

/**
 * brands Array
 * List of brand names to display in the section.
 */
const brands: string[] = ["Google", "Netflix", "Amazon", "Spotify"];

/**
 * Brands Functional Component
 * Renders the section header and a responsive grid of brand names.
 */
const Brands: FC = () => {
  return (
    /**
     * brands container
     * Wraps the entire section with fluid layout and padding.
     */
    <div className="brands box fluid">
      {/**
       * Section header
       * Centers headline and description text.
       */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-zinc-900">
          Brands that backed us
        </h2>
        <p className="text-lg text-zinc-600 mt-6">
          Since 2004, our technology has been trusted by the world’s leading
          companies to power their growth, innovation, and success.
        </p>
      </div>

      {/**
       * Brands grid
       * Displays brand names in a responsive 2-column (mobile) to 4-column (desktop) layout.
       */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {brands.map((brand, i) => (
          /**
           * Individual brand box
           * Centers brand name, adds border, height, and rounded corners.
           */
          <div
            key={i}
            className="flex items-center justify-center h-28 rounded-3xl border border-zinc-200 text-lg font-semibold text-zinc-700"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Default Export
 * Exports the Brands component for use in other parts of the application.
 */
export default Brands;
