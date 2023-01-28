import * as React from "react";
import clsx from "clsx";
import { Circle } from "./Circle";
import Link from "next/link";
import { motion } from "framer-motion";

interface ModelProps {
  email: string;
  showModel: boolean;
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Model({
  email = "jparw@jparw.com",
  showModel,
  setShowModel,
}: ModelProps) {
  return (
    <>
      <div
        className={clsx(
          showModel ? "flex" : "hidden",
          "fixed cursor-default inset-0 z-10 max-h-screen overflow-hidden justify-center items-center"
        )}
      >
        <motion.div
          onClick={() => {
            setShowModel(false);
          }}
          animate={{ opacity: showModel ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut", delay: 0.5 }}
          className="-z-10 fixed inset-0 bg-black/25 cursor-pointer backdrop-blur-md"
        />
        <motion.div
          animate={{ opacity: showModel ? 1 : 0, y: showModel ? 0 : 200 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
          }}
          className={clsx(
            "md:w-[440px]",
            "w-[75vw] bg-card  bg-[rgb(20,_20,_26)] p-[0_24px_24px] md:p-[48px_24px_24px] border-t-2 border-[rgb(38,38,44)] rounded-3xl flex flex-col justify-center items-center"
          )}
        >
          <Circle type="tick" />
          <h2 className="font-normal text-3xl text-center text-white">
            We&apos;ve added you to our waiting list!
          </h2>
          <p className="text-xs text-white opacity-60 pt-3">
            We&apos;ll let you know when CodeSnap is ready.
          </p>
          <div className="bg-[rgb(38,38,44)] w-full border-t-[1px] border-[rgb(55,55,67)] rounded-xl p-4 mt-8 flex flex-col gap-4">
            <div className="h-10 p-[11px_12px_12px] bg-[rgb(20,20,26)] border-t-[1px] border-[rgb(7,7,13)] rounded-md flex items-center gap-[10px]">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 6.75h13.5v10.5H5.25V6.75Z"
                  stroke="#fff"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M5.25 6.75 12 12l6.75-5.25"
                  stroke="#fff"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span className="text-sm text-white pb-px">{email}</span>
            </div>
            <p className="text-xs text-center text-white/50">
              CodeSnap is coming soon.
            </p>
            <p className="text-xs text-center text-white/50">
              Created by{" "}
              <Link
                target={"_blank"}
                className="underline hover:text-white transition"
                href="https://bento.me/jparw"
              >
                Jparw
              </Link>{" "}
              to give you back your time.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
