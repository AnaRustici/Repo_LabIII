import React from 'react'
import BookItem from '../bookItem/BookItem'

const Books = ({books}) => {
  const booksMapped = books.map((book, i) => (
    <BookItem
    key={i} 
    title={book.bookTitle}
    author={book.bookAuthor}
    rating={book.bookRating}
    pageCount={book.pageCount}
    imageUrl={book.imageUrl}
    isAvailable={book.available}>
    </BookItem>
  ))

  return (
    <div className="d-flex justify-content-center flex-wrap">{booksMapped}</div>
  )
}

export default Books