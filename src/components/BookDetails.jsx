import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BookDetails = () => {
    const [data, setData] = useState({})
    const { state } = useLocation()
    const index = state.index

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const res = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538,ISBN:0140449132,ISBN:0439023521,ISBN:0679783261,ISBN:0743273567,ISBN:0307277674,ISBN:0385472579,ISBN:0061120081,ISBN:0142437239,ISBN:0140449264,ISBN:0140449183,ISBN:0140449272,ISBN:0140449191,ISBN:0140449205,ISBN:0140449213,ISBN:0140449221,ISBN:014044923X,ISBN:0140449248,ISBN:0140449256,ISBN:0140449267&format=json&jscmd=data")
            const json = await res.json()
            setData(json)
        } catch (err) {
            console.error('Failed to fetch book details', err)
        }
    }

    const books = Object.values(data)
    const book = typeof index === 'number' ? books[index] : null

    if (!book) {
        return (
            <div className='p-6'>
                <h2 className='text-xl font-semibold'>No book selected</h2>
                <p>Open a book from the Books list to see details.</p>
            </div>
        )
    }

    return (
        <div className='p-6 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold mb-4'>{book.title}</h1>
            {book.cover && (
                <img src={book.cover.large || book.cover.medium} alt={book.title} className='mb-4' />
            )}
            <div className='mb-2'><strong>Authors:</strong> {book.authors?.map(a => a.name).join(', ')}</div>
            <div className='mb-2'><strong>Publishers:</strong> {book.publishers?.map(p => p.name).join(', ')}</div>
            <div className='mb-2'><strong>Publish Date:</strong> {book.publish_date}</div>
            <div className='mt-4'>{book.notes || book.excerpts?.map(e => e.text).join('\n')}</div>
        </div>
    )
}

export default BookDetails
