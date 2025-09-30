import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/index.css";
import Button from "./components/Button";
import Overline from "./components/Overline";
import Navigation from "./components/Navigation";

const navigationItems = [
  { text: "Products", link: "/" },
  { text: "Customer Stories", link: "/" },
  { text: "Resources", link: "/" },
  { text: "Pricing", link: "/" },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="p-12 text-center min-h-[1900px]">
      <Navigation items={navigationItems} />
      <Overline>about us</Overline>
      <h1 className="text-8xl font-bold my-8">
        Most Powerful Way to Connect Every Audience
      </h1>
      <Button className="inline-block" link="123" dark>
        Get Started - For Free!
      </Button>
      <Button className="inline-block ml-6">Book A Demo</Button>
    </div>
  </StrictMode>
);
