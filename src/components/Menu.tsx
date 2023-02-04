import * as React from "react";
import { motion } from "framer-motion";
import useClickAway from "./useClickAway";
import prisma from "lib/prisma";

export function MenuButton() {
    const ref = React.useRef()
    const [menuShown, setMenuShown] = React.useState(false)

    const handleClick = () => {
        console.log('menu shown:', menuShown)
        setMenuShown(!menuShown)
    }

    useClickAway(ref, () => setMenuShown(false))


    return (
        <div className="top-5 right-5 absolute">
            <div ref={ref} className="relative">
                <button type="button" onClick={handleClick} className="bg-[rgb(38,38,44)] border-t-[1px] border-[rgb(55,55,67)] cursor-pointer w-8 text-xs h-8 flex flex-col justify-center items-center text-center text-white/75 rounded-lg p-2">
                    <span className="pointer-events-none">{menuShown ? 'x' : '?'}</span>
                    {menuShown && (
                        <motion.div animate={{y:0, rotate: 45}} initial={{y: -10, rotate: 45}} transition={{duration: 0.15}} className="w-3 absolute top-6 rounded-sm h-3 bg-[rgb(38,38,44)] -z-10"/>
                    )}
                </button>

            </div>
        </div>
    );
}
