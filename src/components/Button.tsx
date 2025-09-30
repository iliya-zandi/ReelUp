import React, { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  dark = false,
  link,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`relative rounded-full px-12 py-4 border border-zinc-900/40 font-medium text-sm ${
        dark && "bg-[#131313] text-zinc-100"
      }  ${className}`}
      {...rest}
    >
      {link && <a href={link} className="absolute top-0 left-0 inset-0"></a>}
      {children}
    </button>
  );
};

export default Button;
