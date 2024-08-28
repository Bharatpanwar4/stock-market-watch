'use client'
import React, { Children } from 'react'
import Header from '../common/Header';
import Ticker from '../screens/ticker';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const Route = ({children}:Readonly<{
    children: React.ReactNode;
 }> ) => {
  return (
    <Provider store={store}>
 <div className='h-screen'>
      <div className='fixed top-0 w-full z-10 '>
      <Ticker/>
      <Header/>
      </div>
      
 <div className=' overflow-y-auto pt-24'>
     
        {children}
    </div>
    </div>
    </Provider>
   
   
  )
}

export default Route