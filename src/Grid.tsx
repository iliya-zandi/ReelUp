import React from "react";

import Grid_1 from "./assets/images/grid-1.jpg";
import Grid_2 from "./assets/images/grid-2.jpg";
import Grid_3 from "./assets/images/grid-3.jpg";
import Grid_4 from "./assets/images/grid-4.jpg";
import Grid_5 from "./assets/images/grid-5.jpg";
import Grid_6 from "./assets/images/grid-6.jpg";
import Grid_7 from "./assets/images/grid-7.jpg";

const images = [Grid_1, Grid_2, Grid_3, Grid_4, Grid_5, Grid_6, Grid_7];

const Grid = () => {
  return (
    <div className="box fluid">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {images.slice(0, 3).map((src, i) => (
          <div
            key={i}
            className="mb-4 h-48 sm:h-60 md:h-72 overflow-hidden break-inside-avoid"
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
        ))}
      </div>
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

export default Grid;
