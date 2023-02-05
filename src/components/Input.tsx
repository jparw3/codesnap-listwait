import * as React from 'react'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email'
}

export function Input({ type = 'text', ...props }: InputProps) {
  return (
    <div className='relative' {...props}>
      <input
        type={type}
        placeholder={type === 'email' ? 'Email address...' : 'Full name...'}
        className={clsx(
          type === 'text' ? 'capitalize' : null,
          'relative  box-border w-full h-12 bg-[rgb(7,7,13)] border-[1.2px] border-[rgb(38,38,44)] rounded-lg text-sm p-[11px_12px_12px_46px] outline-none transition duration-[350ms] text-white',
          'hover:bg-[rgb(20,20,26)] cursor-pointer border-[rgb(20,20,26)] text-[rgb(156,156,171)]',
          'border-2 [&:focus:active:not(:placeholder-shown):text-white] focus:border-[rgb(75,_75,_88)] focus:bg-[rgb(20,20,26)]',
        )}
      />
      {type === 'text' ? (
        <svg
          className='absolute top-3 left-3 pointer-events-none'
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.75 19v-2.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2V19m-3-11a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z'
            stroke='#4B4B58'
            stroke-width='1.5'
          ></path>
        </svg>
      ) : (
        <svg
          className='absolute top-3 left-3 pointer-events-none'
          width='24'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.25 6.75h13.5v10.5H5.25V6.75Z'
            stroke='#4B4B58'
            stroke-width='1.5'
          ></path>
          <path
            d='M5.25 6.75 12 12l6.75-5.25'
            stroke='#4B4B58'
            stroke-width='1.5'
          ></path>
        </svg>
      )}
    </div>
  )
}
