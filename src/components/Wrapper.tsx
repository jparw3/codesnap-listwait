import * as React from 'react'
import Footer from './Footer'

interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className='flex flex-col cursor-default select-none items-center w-screen h-[calc(100vh_-_120px)] justify-center'>
      <div className='relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
