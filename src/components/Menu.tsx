// @ts-nocheck

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useClickAway from './useClickAway'
import { Button } from './Button'

export function MenuButton(updates: any) {
  const ref = React.useRef()
  const [menuShown, setMenuShown] = React.useState(false)

  const handleClick = () => {
    console.log('menu shown:', menuShown)
    setMenuShown(!menuShown)
  }

  useClickAway(ref, () => setMenuShown(false))

  return (
    <div ref={ref} className="absolute z-50 top-5 right-5">
      <div className="relative">
        <button
          type="button"
          onClick={handleClick}
          className="bg-[rgb(38,38,44)] border-t-[1px] border-[rgb(55,55,67)] cursor-pointer w-8 text-xs h-8 flex flex-col justify-center items-center text-center text-white/75 rounded-lg p-2"
        >
          <span className="pointer-events-none">{menuShown ? 'x' : '?'}</span>
          {menuShown && (
            <motion.div
              animate={{ y: 0, rotate: 45 }}
              initial={{ y: -10, rotate: 45 }}
              transition={{ duration: 0.15 }}
              className="w-3 absolute top-6 rounded-sm h-3 bg-[rgb(38,38,44)] -z-10"
            />
          )}
        </button>

        <AnimatePresence>
          {menuShown && (
            <motion.div
              transition={{ type: 'spring', duration: 0.5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="absolute text-white cursor-default w-[350px] h-auto max-h-[450px] overflow-y-scroll -left-80 top-14 bg-[rgb(21,20,27)] p-5 border-t-[1px] rounded-xl border-[rgb(55,55,67)] aftershadow"
            >
              <span className="flex items-center h-3 gap-3 pt-4 pb-8">
                <UpdatesIcon />
                <h3 className=" text-[#A19FA9]"> Updates</h3>
              </span>
              <div className="flex flex-col gap-3">
                {updates.updates.map((update: any) => (
                  <div
                    className="bg-[rgb(38,38,44)] border-t-[1px] border-[rgb(55,55,67)] cursor-default flex flex-col text-white/75 rounded-lg p-4"
                    key={update.id}
                  >
                    <p className="text-xs text-white capitalize opacity-50">{update.date}</p>
                    <p className="text-sm text-white opacity-90 first-letter:capitalize">{update.message}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const UpdatesIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="#A19FA9"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
    />
  </svg>
)
