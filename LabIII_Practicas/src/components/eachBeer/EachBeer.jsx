import React from 'react'

const EachBeer = ({name, price, newPrice}) => {
    let priceARS = price * 1000
  return (
    <div>
        <p>Beer: {name}</p>
        <p>{newPrice? 'Price: $' + price : 'Price: $' + priceARS}</p>
    </div>
  )
}

export default EachBeer