import * as React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="flex cursor-default select-none items-center w-screen h-[calc(100vh_-_120px)] justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}