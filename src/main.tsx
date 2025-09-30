/**
 * Entry Point of the React Application
 * Renders the root App component inside the HTML element with id "root".
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * Global CSS Import
 * Imports the main stylesheet for the application.
 */
import "./assets/styles/index.css";

/**
 * App Component Import
 * Imports the root App component of the React application.
 */
import App from "./App";

/**
 * Create Root and Render App
 * 1. Finds the HTML element with id "root".
 * 2. Creates a React root.
 * 3. Renders the App component wrapped in React StrictMode.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
