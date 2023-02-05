import clsx from 'clsx'
import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  icon?: boolean
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
}

export function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <button
      disabled={props.disabled}
      {...props}
      className={clsx(
        'w-full group h-12 text-white relative font-medium leading-6 text-center bg-[rgb(38,38,44)] rounded-lg cursor-pointer transition-[all_300ms_ease_0s]',
        'hover:bg-[rgb(20,20,26)] hover:text-white',
        'disabled:bg-[rgb(20,20,26)] disabled:text-[rgb(75,75,88)] disabled:cursor-not-allowed',
        props.className,
      )}
    >
      {loading ? (
        <svg
          className='animate-spin mx-auto'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z'
            fill='rgba(255,255,255,1)'
          />
        </svg>
      ) : (
        children
      )}
      {!loading && props.icon && (
        <svg
          className='absolute top-3 right-3 stroke-white group-hover:translate-x-1 duration-500 transition ease-in-out'
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 12H6M13.5 7.5 18 12l-4.5 4.5'
            stroke='currentColor'
            stroke-width='1.5'
          ></path>
        </svg>
      )}
    </button>
  )
}
