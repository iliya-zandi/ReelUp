import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/index.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Grid from "./Grid";
import Expand from "./Expand";
import Values from "./Values";
import Brands from "./Brands";
import Team from "./Team";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-[5000px]">
      <Navbar />
      <Hero />
      <Grid />
      <Expand />
      <Values />
      <Brands />
      <Team />
    </div>
  </StrictMode>
);
