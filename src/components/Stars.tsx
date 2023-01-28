import * as React from "react";
import { motion } from "framer-motion";

export function Stars() {
  return (
    <div className="absolute w-screen h-screen top-0 overflow-hidden pointer-events-none stars-mask">
      <motion.div
        animate={{ scale: 3 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="w-[40vw] h-[40vh] rounded-full absolute left-[calc(50%_-_20vw)] top-[5vw] bg-stars"
      />
    </div>
  );
}
