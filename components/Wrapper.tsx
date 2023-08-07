import React, { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
}

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return (
    <div className='w-full max-w-screen-2xl flex flex-col items-center snap-center'> 
      {children}
    </div>
  )
}

export default Wrapper