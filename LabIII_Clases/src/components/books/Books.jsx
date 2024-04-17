import React, { useState } from 'react'
import BookItem from '../bookItem/BookItem'
import SearchBook from '../searchBook/SearchBook'
import BookForm from '../bookForm/BookForm'
import './Books.css'

const Books = ({ allBooks }) => {
  const [text, setText] = useState('')
  const [books, setBooks] = useState(allBooks)

  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    setBooks((prev) => [...prev, bookData]);
  };

  const inputHandler = (inputText) => {
    setText(inputText)
  }

  const booksSearched = books.filter((book) => book.bookTitle.toLowerCase().includes(text.toLowerCase()))


  return (
    <>
      <div className='main-div'>
        <SearchBook onSearch={inputHandler}></SearchBook>
        <BookForm onBookDataSaved={saveBookDataHandler}></BookForm>
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