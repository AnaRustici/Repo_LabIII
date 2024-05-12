import React, { useState } from 'react'
import BookItem from '../bookItem/BookItem'
import SearchBook from '../searchBook/SearchBook'
import BookForm from '../bookForm/BookForm'
import './Books.css'
import { BOOKS } from '../data/Data'

const Books = ({books}) => {
  const [text, setText] = useState('')

  const inputHandler = (inputText) => {
    setText(inputText)
  }

  const booksSearched = books.filter((book) => book.bookTitle.toLowerCase().includes(text.toLowerCase()))


  return (
    <>
      <div className='main-div'>
        <h2>Books Champion App</h2>
        <p>¡Quiero leer libros!</p>
        <SearchBook onSearch={inputHandler}></SearchBook>
        <div className="d-flex justify-content-center flex-wrap">
          {booksSearched.map((book) => (
            <BookItem
              key={book.id}
              title={book.bookTitle}
              author={book.bookAuthor}
              rating={book.bookRating}
              pageCount={book.pageCount}
              imageUrl={book.imageUrl}
              isAvailable={book.available}>
            </BookItem>
          ))}
        </div>
      </div>

    </>

  )
}

export default Books