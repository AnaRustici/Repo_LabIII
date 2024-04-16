import React from 'react'
import {Card} from 'react-bootstrap'
import propTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const BookItem = ({title, author, pageCount, rating, imageUrl, isAvailable}) => {
  const [newState, setNewState] = useState(isAvailable)

  const text = newState ? 'Available' : 'Sold Out'

  const clickHandler = () => {
    setNewState(!newState)
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
            <div>{rating?.length} estrellas</div> 
            <p>{pageCount} páginas</p>
            <p>{text}</p>
          </Card.Body>
          <Button variant='dark' onClick={clickHandler}>Cambiar estado</Button>
      </Card>
  )
}

BookItem.propTypes = { 
    title: propTypes.string, 
    author: propTypes.string, 
    pageCount: propTypes.number, 
    rating: propTypes.array,
    isAvailable: propTypes.bool, 
};

export default BookItem