import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Books = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    
      const res = await fetch( "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538,ISBN:0140449132,ISBN:0439023521,ISBN:0679783261,ISBN:0743273567,ISBN:0307277674,ISBN:0385472579,ISBN:0061120081,ISBN:0142437239,ISBN:0140449264,ISBN:0140449183,ISBN:0140449272,ISBN:0140449191,ISBN:0140449205,ISBN:0140449213,ISBN:0140449221,ISBN:014044923X,ISBN:0140449248,ISBN:0140449256,ISBN:0140449267&format=json&jscmd=data")
      const res1 = await res.json()
      setData(res1)

  }

  const books = Object.values(data)

  return (
    <>
      <h1 className='text-4xl font-bold text-center pb-5 pt-4'>BOOKS</h1>
      <div className='flex flex-wrap justify-evenly'>
        {books.map((item, index) => (
          <div key={index} className='m-8 w-72'>
            {item.cover && (
              <Link to={'/bookdetails'} state={{ index }}>
                <img
                  src={item.cover.medium}
                  alt={item.title}
                  className='h-80 w-72 object-contain rounded-md cursor-pointer'
                />
              </Link>
            )}
            <div className='text-center mt-2'>{item.title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books
