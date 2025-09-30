/**
 * Newsletter Component
 * Renders a newsletter subscription section with heading, description, input field, and subscribe button.
 */
import React, { type FC, type FormEvent, useState } from "react";
import Button from "./components/Button";
import Overline from "./components/Overline";

/**
 * Newsletter Functional Component
 * Provides a controlled form for subscribing to a newsletter.
 */
const Newsletter: FC = () => {
  /**
   * email state
   * Stores the user's input email address.
   */
  const [email, setEmail] = useState<string>("");

  /**
   * handleSubmit function
   * Handles form submission, logs the email, and clears the input field.
   * @param e FormEvent<HTMLFormElement> - the submit event
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    /**
     * newsletter container
     * Wraps the entire newsletter section with background, padding, and rounded corners.
     */
    <div className="newsletter box fluid bg-zinc-50 rounded-4xl">
      {/**
       * Content wrapper
       * Centers text and form within a max-width container.
       */}
      <div className="max-w-3xl mx-auto text-center">
        {/** Overline label */}
        <Overline>newsletter</Overline>

        {/** Section headline */}
        <h2 className="text-3xl md:text-6xl font-bold text-zinc-900 mt-4">
          Subscribe to our newsletter
        </h2>

        {/** Section description */}
        <p className="text-lg text-zinc-600 mt-4">
          Get the latest updates, insights, and special offers directly in your
          inbox. Stay connected with us!
        </p>

        {/**
         * Subscription form
         * Handles email input and form submission.
         */}
        <form
          className="flex flex-col md:flex-row items-center gap-4 mt-8"
          onSubmit={handleSubmit}
        >
          {/** Email input field */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-1 px-6 py-4 rounded-3xl border border-zinc-300 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            required
          />

          {/** Subscribe button */}
          <Button className="px-8 py-4" dark={true}>
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

/**
 * Default Export
 * Exports the Newsletter component for use in other parts of the application.
 */
export default Newsletter;
