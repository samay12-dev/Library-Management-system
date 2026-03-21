import React from 'react'
import { useRef ,useState} from 'react'
import Books from './Books';
const Image = () => {
  const [state, changeState] = useState([])
  let r1 = useRef()
let b;
  function handleClick() {
    const a = r1.current.value
    changeState(a)
b=a;
  }
  
  return (
   <>
<img src="/Images/ImpImage1.png" alt="image not found"  className='h-[400px] w-[100%]' />
<div className='absolute top-44 left-[40%]'>
<ul className='flex flex-col items-center'><li className='text-6xl text-white mb-3'>Welcome to Library</li>
<li className='text-xl text-orange-400 mb-3'>Explore,Learn,Discover</li>
</ul></div>



<Books props={state}/>

   </>
   
  )
}

export default Image
