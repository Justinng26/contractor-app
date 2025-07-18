import Link from 'next/link';
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children?: React.ReactNode;
}
const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <button className='px-16 py-4 bg-primary text-white text-xl w-full md:auto'
            {...rest}
        >
        {children ? children : <Link href="/">Contact Us</Link>}
    </button>
  )
}

export default Button

// to do: change link