import React, { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
}

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return (
    <div className='w-full flex flex-col items-center p-4'>
      {children}
    </div>
  )
}

export default Wrapper