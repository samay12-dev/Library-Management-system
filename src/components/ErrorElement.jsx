import React from 'react'
import Header from './Header'
const ErrorElement = () => {
  return (<>
    <Header/>
    <div className='flex  flex-col items-center justify-center text-4xl pt-56'>
      <img src="https://th.bing.com/th/id/OIP.A0J4frrrZWZlo8fM-pd48AHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" />
      Error 404 Page not found
    </div></>
  )
}

export default ErrorElement
