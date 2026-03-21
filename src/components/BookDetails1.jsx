import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState} from 'react'
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Styles/BookDetails1.css"
const BookDetails1 = () => {
    
const {state}=useLocation()
const index=state?.index;
const [data,setData]=useState({})
useEffect(()=>{
    loadData()
},[]);

 async function loadData() {
  try {
    let response = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40&startIndex=40");

    let response1 = await response.json();
    setData(response1);

    console.log("DATA:", response1); 
  } catch (err) {
    console.log("ERROR:", err); 
  }
}


const booksArray = data.items || []; 
return (
   <>
   <Header/>
    <div className='flex items-center justify-center pt-20 pb-16 border-2 shadow-md '>
        {
booksArray
  .filter((_, i) => i === index)
  .map((item, i) => (
    <ul key={i} className='flex flex-col '>
        <li><img src={item.volumeInfo.imageLinks?.thumbnail} className='h-72 w-60'   alt="" /></li>
       <li className='items-center'>{item.volumeInfo.title}</li>
<li><b> Author</b>:{item.volumeInfo.authors}
<li><b>Published Date:</b>{item.volumeInfo.publishedDate}</li>
    </li>
    </ul>
  ))
  
}
</div>
{console.log(data)}
<Footer className='fixed bottom-0 '/>
   </>
  )
}
 


export default BookDetails1
