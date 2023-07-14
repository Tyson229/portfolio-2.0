import React, { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
}

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return (
    <div className='w-full flex flex-col max-w-screen-2xl p-4 items-center'> 
      {children}
    </div>
  )
}

export default Wrapper