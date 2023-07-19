import React, { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
}

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return (
    <div className='w-full max-w-screen-2xl flex flex-col p-4 items-center gap-4 lg:p-8'> 
      {children}
    </div>
  )
}

export default Wrapper