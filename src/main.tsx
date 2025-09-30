import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/index.css";
import Button from "./components/Button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="p-12">
      <Button className="inline-block" link="123" dark>
        Get Started - For Free!
      </Button>
      <Button className="inline-block ml-6">Book A Demo</Button>
    </div>
  </StrictMode>
);
