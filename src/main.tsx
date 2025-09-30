import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/index.css";

import Navbar from "./Navbar";
import Hero from "./Hero";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-[2000px]">
      <Navbar />
      <Hero />
    </div>
  </StrictMode>
);
