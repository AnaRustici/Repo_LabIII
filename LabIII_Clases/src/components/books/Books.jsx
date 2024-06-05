import React from 'react'
import './Books.css'
import BookItem from '../bookItem/BookItem'

const Books = ({books, onDeletedBook}) => {

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {books.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.bookTitle}
            author={book.bookAuthor}
            rating={book.bookRating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            isAvailable={book.available}
            onDeletedBook={onDeletedBook}>
          </BookItem>
        ))}
      </div>

    </>

  )
}

export default Books