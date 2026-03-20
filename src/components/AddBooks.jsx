import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../store/store'
import Header from './Header'
const AddBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    const book = {
      id: Date.now().toString(),
      title: trimmedTitle,
      author: author.trim(),
      description: description.trim()
    }

    dispatch(addBook(book))
    setTitle('')
    setAuthor('')
    setDescription('')
  }

  return (
    <>
  <Header/>
    <form onSubmit={handleSubmit} className="add-book-form  text-xl flex flex-col items-center justify-center pt-8">
      <div className='pt-3'>
        <label htmlForfor="title" >Title:</label>
        <input
          type="text" value={title} onChange={(e) => setTitle(e.target.value)}  id='title' className='border-2' />
      </div>
      <div className='pt-3'>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author" className='border-2'
        />
      </div>
      <div className='pt-3  flex items-center'>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          className='border-2'
        />
      </div>
      <button type="submit" className='bg-blue-600 p-2 rounded-md hover:shadow-md text-white hover:-translate-y-[-4px]'>Add Book</button>
    </form>  </>
  )
}

export default AddBooks
