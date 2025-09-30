import React, { type FC } from "react";

interface NavigationItem {
  text: string;
  link: string;
  className?: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ items, className = "" }) => {
  return (
    <nav className="navigation">
      <ul className="flex justify-between md:justify-start flex-row md:gap-x-2 gap-x-0 items-center">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className={`text-zinc-800 font-normal md:px-4 px-0 grow md:py-2 ${className}`}
              href={item.link}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
