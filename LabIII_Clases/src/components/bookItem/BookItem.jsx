import React from 'react'
import {Card} from 'react-bootstrap'
import PropTypes from 'prop-types';

const BookItem = ({title, author, pageCount, rating, imageUrl}) => {
    
    return (
        <Card style={{ width: "22rem" }}>
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
            </Card.Body>
        </Card>
    )
}

BookItem.PropTypes = { 
    title: PropTypes.string, 
    author: PropTypes.string, 
    pageCount: PropTypes.number, 
    rating: PropTypes.array, 
};

export default BookItem