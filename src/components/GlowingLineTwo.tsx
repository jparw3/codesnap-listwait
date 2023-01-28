import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function GlowLineTwo() {
  return (
    <div
      className={clsx(
        "absolute",
        "bottom-[20vh] right-0 -translate-x-[10vw]",
        "md:bottom-[10vh] md:-translate-x-[20vw]"
      )}
    >
      <div className="w-72 h-px bg-line overflow-hidden relative">
        <motion.div
          initial={{ x: "300px" }}
          animate={{ x: "-300px" }}
          transition={{
            duration: 1.5,
            repeatDelay: 3,
            repeat: Infinity,
          }}
          className="w-full h-1 absolute bottom-0 right-0 bg-glow-line"
        />
      </div>
      <div className="h-72 w-px bg-line absolute -bottom-20 right-20" />
    </div>
  );
}
