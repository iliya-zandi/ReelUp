/**
 * App Component
 * The root component of the React application.
 * Composes all major sections of the website into a single layout.
 */
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Grid from "./Grid";
import Expand from "./Expand";
import Values from "./Values";
import Brands from "./Brands";
import Team from "./Team";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

/**
 * App Functional Component
 * Renders the main structure of the website by including all page sections.
 */
const App = () => {
  return (
    /**
     * app container
     * Wraps all sections of the website.
     */
    <div className="app">
      {/** Navigation bar section */}
      <Navbar />
      {/** Hero section */}
      <Hero />
      {/** Grid section */}
      <Grid />
      {/** Expand section */}
      <Expand />
      {/** Values section */}
      <Values />
      {/** Brands section */}
      <Brands />
      {/** Team section */}
      <Team />
      {/** Newsletter section */}
      <Newsletter />
      {/** Footer section */}
      <Footer />
    </div>
  );
};

/**
 * Default Export
 * Exports the App component for rendering in the entry point.
 */
export default App;
