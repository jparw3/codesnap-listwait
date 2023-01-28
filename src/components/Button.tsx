import clsx from "clsx";
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      disabled={props.disabled}
      {...props}
      className={clsx(
        "w-full h-12 text-white relative font-medium leading-6 text-center bg-[rgb(38,38,44)] rounded-lg cursor-pointer transition-[all_300ms_ease_0s]",
        "hover:bg-[rgb(20,20,26)] hover:text-white",
        "disabled:bg-[rgb(20,20,26)] disabled:text-[rgb(75,75,88)] disabled:cursor-not-allowed",
        props.className
      )}
    >
      {children}
      {props.icon && (
        <svg
          className="absolute top-3 right-3 stroke-white"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 12H6M13.5 7.5 18 12l-4.5 4.5"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </svg>
      )}
    </button>
  );
}