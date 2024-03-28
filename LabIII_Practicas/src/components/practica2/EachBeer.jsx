import React from 'react'

const EachBeer = ({name, price}) => {
    let priceARS = price * 1000
  return (
    <div>
        <p>Beer: {name}</p>
        <p>Price: ${priceARS}</p>
    </div>
  )
}

export default EachBeer