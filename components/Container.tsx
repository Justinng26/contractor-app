import React from 'react'

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container = ({className, children}: ContainerProps) => {
  return (
    <div className={`container lg:max-w-6xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container
