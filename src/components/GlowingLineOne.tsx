import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function GlowLineOne() {
  return (
    <div
      className={clsx(
        "absolute",
        "top-[5vh] left-0 -translate-x-[10vw]",
        "md:top-[30vh] md:left-[calc(50%_-_144px)] md:-translate-x-[20vw]"
      )}
    >
      <div className="w-72 h-px bg-line overflow-hidden relative">
        <motion.div
          initial={{ x: "-300px" }}
          animate={{ x: "300px" }}
          transition={{
            duration: 1.5,
            repeatDelay: 3,
            repeat: Infinity,
          }}
          className="w-full h-1 absolute top-0 left-0 bg-glow-line"
        />
      </div>
      <div className="h-72 w-px bg-line absolute -top-20 left-20" />
    </div>
  );
}
