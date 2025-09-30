import React from "react";
import Overline from "./components/Overline";
import Button from "./components/Button";
import ValueImg from "./assets/images/values.jpg";

const Values = () => {
  return (
    <div className="value box fluid">
      <div className="text-center max-w-3xl mx-auto">
        <Overline>our values</Overline>
        <h2 className="text-3xl md:text-6xl leading-normal font-bold text-zinc-900 mt-4">
          We Help People Create <br /> And Build Wealth
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mt-16">
        {/* سمت چپ - متن‌ها */}
        <div className="flex flex-col justify-center text-center md:text-left md:items-start items-center">
          <p className="text-xl leading-9 text-zinc-600 mb-6">
            We believe in empowering individuals to take control of their
            financial futures and unlock new opportunities for growth.
          </p>
          <p className="text-xl leading-9 text-zinc-600 mb-6">
            Our approach combines innovation and simplicity, making wealth
            creation accessible to everyone, everywhere.
          </p>
          <p className="text-xl leading-9 text-zinc-600 mb-8">
            By focusing on people first, we ensure lasting value and impact that
            drives long-term success.
          </p>

          <Button className="px-12 py-4" dark={true}>
            Learn More
          </Button>
        </div>

        {/* سمت راست - تصویر + باکس روی اون */}
        <div className="relative">
          <img
            src={ValueImg}
            alt="Our Values"
            className="w-full h-96 object-cover rounded-4xl"
          />
          <div className="absolute top-0 right-0 -mr-6 -mt-6 bg-black shadow-2xl rounded-4xl p-6 w-3/4 md:w-1/2 text-white">
            <span className="uppercase text-xs tracking-widest text-zinc-400">
              - committed to
            </span>
            <h3 className="text-3xl my-3 font-semibold">99%</h3>
            <span className="text-zinc-300 mt-2 tracking-wide">Up Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
