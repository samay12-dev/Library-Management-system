import React, { useEffect, useState } from 'react'
import Footer from './Footer';
// import './Styles/Library.css'
const Library = () => {
  const [data,setData]= useState([]);
  
 async function getData(){
const response=await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40&startIndex=40");
const response1 =await response.json();
setData(response1.items || []);

console.log(response1)
  }
  useEffect(()=>{
    getData();
  },[])
  function handleClick(){
 let ab=   data.filter((a)=>a.volumeInfo.averageRating>=3.0)
setData(ab)

    
  }
  function handleClick1(info){
setData(data[info])

  }
  return (
    <>
    <main className='flex flex-col items-center justify-evenly  pb-6'>
        <div className="library-container p-6 flex justify-between items-center">
      <h1 className="text-4xl font-semibold p-5 text-center">Library</h1>
</div>
<span className=' outline-none border-2 rounded-md  pr-1 pl-1  pb-2  flext items-center justify-center h-8 hover:shadow-md hover:translate-y-1 text-white bg-blue-600' onClick={handleClick}>Best Books</span>
<div className='grid grid-cols-4 gap-4 mt-6'>{
data.map((item,index)=>(
<ul className='flex flex-col items-center justify-center  border-2 mr-4 shadow-md bg-slate-100 translate-y-3'><li key={index} ><img   src={item.volumeInfo.imageLinks?.thumbnail}  alt="noImage"  onClick={()=>handleClick1(index)} /></li><br></br>
<li className='items-center'>{item.volumeInfo.title}</li>
<li><b> Author</b>:{item.volumeInfo.authors}
    </li>
    <li>{item.volumeInfo.averageRating}</li></ul>

))
}</div>
    </main>
    <Footer />
    </>
  )
}

export default Library
