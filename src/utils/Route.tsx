import React, { Children } from 'react'
import Header from '../common/Header';

const Route = ({children}:Readonly<{
    children: React.ReactNode;
 }> ) => {
  return (
    <div className='h-screen overflow-y-auto'>
      <Header/>
        {children}
    </div>
  )
}

export default Route