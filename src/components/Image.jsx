import React from 'react'
import { useRef ,useState} from 'react'
import Books from './Books';
const Image = () => {
  const [state, changeState] = useState([])
  let r1 = useRef()

  function handleClick() {
    const a = r1.current.value
    changeState(a)
  }
  return (
   <>
<img src="/Images/ImpImage1.png" alt="image not found"  className='h-[400px] w-[100%]' />
<div className='absolute top-44 left-[40%]'>
<ul className='flex flex-col items-center'><li className='text-6xl text-white mb-3'>Welcome to Library</li>
<li className='text-xl text-orange-400 mb-3'>Explore,Learn,Discover</li>
<li className='bg-white border-2 w-80 flex justify-between mb-3'> <input type="text" placeholder='Search for books'  className='border-collapse p-2 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500' id='text1'  ref={r1} /> <button className='bg-gradient-to-r from-[#0B2C5F] to-[#1E3A6D] p-2 rounded-sm  text-white' onClick={handleClick}>Search</button> </li></ul>
</div>

{/* <div className='flex justify-center absolute top-[52%] left-[20%] circ'>
  <div className='flex flex-col mr-9 rounded-lg '>
    <img src="/Images/icon1.png" alt="" />
  <p><ul ><li className='bg-[#0B2C5F] text-white  text-center'>Books & Media</li>
  <li className='bg-[#0B2C5F] text-white items-center  text-center '>Browse Our Collection </li>
  </ul></p>
  </div>

  <div className='flex flex-col mr-9 rounded-lg circ'><img src="/Images/icon2.png" alt="" />
  <p><ul><li className='bg-[#0B2C5F] text-white  text-center'>E-Resources</li>
  <li className='bg-[#0B2C5F] text-white items-center  text-center'>Access Online Resources </li>
  </ul></p></div>

  <div className='flex flex-col rounded-md circ'>
    <img src="/Images/icon3.png" alt="" />
  <p className='pb-3'><ul><li className='bg-[#0B2C5F] text-white text-center' >Events & Programs</li>
  <li className='bg-[#0B2C5F] text-white text-center'>Upcoming Events </li>
  </ul></p>
  </div>
</div> */}

<Books props={state}/>

   </>
   
  )
}

export default Image
