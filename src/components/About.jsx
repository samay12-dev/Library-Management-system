import React from 'react'
import Header from './Header'
import Footer from './Footer'
const About = () => {
  return (
    <>
    <Header/>
    <div className='text-center pt-10 text-5xl '>
   This project is made by samay Gaihar(oct batch) <br>
   
   </br>  
   as a react mini assignment(Library Management Assignment) 
    </div>
    <div className='text-center pt-10  '><h1 className='text-3xl'>Technologies Used:- </h1>
    <ul><li className='text-xl'>Redux toolkit(In addBook page)</li>
    <li className='text-xl'>Routes</li>
    <li className='text-xl'>Geolocation hook from Routes</li>
    <li><ul>Api:-<li>OpenLibrary Api</li>
    <li>Google Books Api</li></ul></li> </ul></div>
    
   
    </>
  )
}

export default About
