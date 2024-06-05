import React from 'react'
import {Card} from 'react-bootstrap'
import propTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const BookItem = ({id, title, author, pageCount, rating, imageUrl, isAvailable, onDeletedBook}) => {
  const [newState, setNewState] = useState(isAvailable)

  const text = newState ? 'Available' : 'Sold Out'

  const clickHandler = () => {
    setNewState(!newState)
  }

  const deleteHandler = () => {
    onDeletedBook(id)
  }
    
  return (
      <Card style={{ width: "22rem" }} className="mx-3">
          <Card.Img
            height={400} 
            variant="top" 
            src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}>
          </Card.Img>
          <Card.Body>
            <Card.Title>{title}</Card.Title> 
            <Card.Subtitle>{author}</Card.Subtitle> 
            <div>{rating} estrellas</div> 
            <p>{pageCount} páginas</p>
            <p>{text}</p>
          </Card.Body>
          <Button variant='dark' onClick={clickHandler}>Cambiar estado</Button>
          <Button variant='danger' onClick={deleteHandler}>Eliminar libro</Button>
      </Card>
  )
}

BookItem.propTypes = { 
    id: propTypes.string,
    title: propTypes.string, 
    author: propTypes.string, 
    pageCount: propTypes.number, 
    rating: propTypes.number,
    isAvailable: propTypes.bool, 
};

export default BookItem