import React from 'react'

const BeersStyles = ({array}) => {
    let styles = []
    array.forEach(beer => {
        if(!styles.includes(beer.beerStyle)){
            styles.push(beer.beerStyle)
            styles.push(', ')
        }
    })
    styles.pop()
    
  return (
    <div><p>{styles}</p></div>
  )
}

export default BeersStyles