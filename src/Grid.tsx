/**
 * Grid Component
 * Displays a responsive image grid using CSS columns and object-cover images.
 */
import React, { type FC } from "react";

import Grid_1 from "./assets/images/grid-1.jpg";
import Grid_2 from "./assets/images/grid-2.jpg";
import Grid_3 from "./assets/images/grid-3.jpg";
import Grid_4 from "./assets/images/grid-4.jpg";
import Grid_5 from "./assets/images/grid-5.jpg";
import Grid_6 from "./assets/images/grid-6.jpg";
import Grid_7 from "./assets/images/grid-7.jpg";

/**
 * images Array
 * Contains the imported image sources for the grid.
 */
const images: string[] = [
  Grid_1,
  Grid_2,
  Grid_3,
  Grid_4,
  Grid_5,
  Grid_6,
  Grid_7,
];

/**
 * Grid Functional Component
 * Renders two responsive CSS column sections with images.
 */
const Grid: FC = () => {
  return (
    /**
     * Grid container
     * Wraps the entire image grid.
     */
    <div className="box fluid">
      {/**
       * First column group
       * Displays the first 3 images with responsive heights and column layout.
       */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {images.slice(0, 3).map((src, i) => (
          /**
           * Individual image container
           * Applies height, margin, overflow, and prevents breaking inside columns.
           */
          <div
            key={i}
            className="mb-4 h-48 sm:h-60 md:h-72 overflow-hidden break-inside-avoid"
          >
            {/**
             * img element
             * Displays the image with object-cover and rounded corners.
             */}
            <img
              src={src}
              alt={`img-${i}`}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
        ))}
      </div>

      {/**
       * Second column group
       * Displays the remaining images (index 3+) with responsive columns.
       */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 mt-4 [column-fill:_balance]">
        {images.slice(3).map((src, i) => (
          <div
            key={i}
            className="mb-4 h-48 sm:h-60 md:h-72 overflow-hidden break-inside-avoid"
          >
            <img
              src={src}
              alt={`img-${i + 3}`}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Default Export
 * Exports the Grid component for use in other parts of the application.
 */
export default Grid;
