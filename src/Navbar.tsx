import React from "react";
import Navigation from "./components/Navigation";
import Button from "./components/Button";

const navigationItems = [
  { text: "Products", link: "/" },
  { text: "Customer Stories", link: "/" },
  { text: "Resources", link: "/" },
  { text: "Pricing", link: "/" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="fluid lg:py-12 py-6 px-4 md:px-0">
        <div className="flex flex-wrap items-center lg:flex-nowrap justify-between">
          <div className="lg:w-auto w-1/3 order-0">
            <a href="/" className="inline-block pr-2">
              <h1 className="text-2xl font-bold text-zinc-900">
                <span>ReelUp.</span>
              </h1>
            </a>
          </div>

          <div className="order-1 w-full lg:w-auto lg:order-2 mt-4 lg:mt-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-zinc-800/10 flex justify-center">
            <Navigation items={navigationItems} />
          </div>

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

export default Navbar;
