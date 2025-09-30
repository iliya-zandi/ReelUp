import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/index.css";
import Button from "./components/Button";
import Overline from "./components/Overline";
import Navigation from "./components/Navigation";
import Navbar from "./Navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="">
      <Navbar />
    </div>
  </StrictMode>
);
