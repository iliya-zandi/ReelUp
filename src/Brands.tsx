import React from "react";

const brands = ["Google", "Netflix", "Amazon", "Spotify"];

const Brands = () => {
  return (
    <div className="brands box fluid py-16 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
          Brands that backed us
        </h2>
        <p className="text-lg text-zinc-600 mt-4">
          Since 2004, our technology has been trusted by the world’s leading
          companies to power their growth, innovation, and success.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-28 rounded-3xl border border-zinc-200 shadow-sm bg-white text-xl font-semibold text-zinc-800"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
