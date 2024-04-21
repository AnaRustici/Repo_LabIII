import React from 'react'

const Red_IPA_Beers = ({array}) => {
    let redBeers = 0
    let IPAbeers = 0
    array.map((beer) => {
        if(beer.beerStyle === 'Red'){
            redBeers = redBeers + 1
        } else if(beer.beerStyle === 'IPA'){
            IPAbeers = IPAbeers + 1
        }
    })

  return (
    <div>
        <p>Red beers: {redBeers}</p>
        <p>IPA beers: {IPAbeers}</p>
    </div>
  )
}

export default Red_IPA_Beers