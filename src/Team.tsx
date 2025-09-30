/**
 * Team Component
 * Renders the "Our Team" section with heading, buttons, and team member cards.
 */
import React, { type FC } from "react";
import Overline from "./components/Overline";
import Button from "./components/Button";
import Team1 from "./assets/images/grid-5.jpg";
import Team2 from "./assets/images/grid-6.jpg";

/**
 * Member Interface
 * Represents a single team member.
 * - img: member image source
 * - name: member name
 * - role: member role in the team
 */
interface Member {
  img: string;
  name: string;
  role: string;
}

/**
 * members Array
 * List of team members to display in the section.
 */
const members: Member[] = [
  {
    img: Team1,
    name: "Sarah Johnson",
    role: "Marketing Lead",
  },
  {
    img: Team2,
    name: "David Wilson",
    role: "Product Designer",
  },
];

/**
 * Team Functional Component
 * Displays section heading, action buttons, and team member cards in a responsive grid.
 */
const Team: FC = () => {
  return (
    /**
     * team container
     * Wraps the entire section with padding and fluid layout.
     */
    <div className="team box fluid py-16 md:py-28">
      {/** Section heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Overline>our team</Overline>
        <h2 className="text-3xl md:text-6xl leading-normal font-bold text-zinc-900 mt-4">
          We have got entire team <br /> to support business
        </h2>

        {/** Action buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Button className="px-8 py-4">Book a Demo</Button>
          <Button className="px-8 py-4" dark={true}>
            Get Started For Free!
          </Button>
        </div>
      </div>

      {/** Team member cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {members.map((m, i) => (
          /**
           * Individual member card
           * Displays the member image, name, role, and description.
           */
          <div
            key={i}
            className="bg-white rounded-4xl border border-zinc-200 p-6 flex flex-col items-center text-center"
          >
            {/** Member image */}
            <img
              src={m.img}
              alt={m.name}
              className="w-40 h-40 object-cover rounded-full mb-6"
            />
            {/** Member name */}
            <h3 className="text-xl lg:text-2xl font-semibold text-zinc-900">
              {m.name}
            </h3>
            {/** Member role and description */}
            <p className="text-zinc-500/70 text-sm mt-3 leading-relaxed">
              {m.role} <br />
              delivering innovative solutions.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Default Export
 * Exports the Team component for use in other parts of the application.
 */
export default Team;
