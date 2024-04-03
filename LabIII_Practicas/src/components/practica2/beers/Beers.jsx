import React from 'react'
import EachBeer from '../eachBeer/EachBeer'
import AvailableBeers from '../availableBeers/AvailableBeers'
import Red_IPA_Beers from '../redIPAbeers/Red_IPA_Beers'
import BeersStyles from '../beersStyles/BeersStyles'

const beers = [
    {
        id: 1,
        beerName: "American",
        beerStyle: "IPA",
        price: 3,
        available: true,
    },
    {
        id: 2,
        beerName: "Argenta",
        beerStyle: "IPA",
        price: 4,
        available: false,
    },
    {
        id: 3,
        beerName: "Irish",
        beerStyle: "Red",
        price: 4,
        available: true,
    },
    {
        id: 4,
        beerName: "Scotish",
        beerStyle: "Red",
        price: 3,
        available: true,
    },
    {
        id: 5,
        beerName: "DeEssoCiTratta",
        beerStyle: "APA",
        price: 3,
        available: true,
    },
    {
        id: 6,
        beerName: "Santa APA",
        beerStyle: "APA",
        price: 3,
        available: true,
    },
    {
        id: 7,
        beerName: "German",
        beerStyle: "Pilsen",
        price: 1,
        available: true,
    },
    {
        id: 8,
        beerName: "London Porter",
        beerStyle: "Porter",
        price: 2,
        available: false,
    },
    {
        id: 9,
        beerName: "Scotish ALE",
        beerStyle: "Red",
        price: 5,
        available: false,
    }
]

const Beers = () => {
    return (
        <>
            <h2>Beers</h2>
            <div style={{display: 'flex'}}>
                <div style={{marginRight: '20px'}}>
                    <i><u>Beer and price:</u></i>
                    {beers.map((beer) => (
                        <EachBeer key={beer.id} name={beer.beerName} price={beer.price}></EachBeer>
                    ))}
                </div>
                <div style={{marginRight: '20px'}}>
                    <i><u>Available beers:</u></i>
                    {beers.filter((beer) => beer.available === true).map((beer) => (
                        <AvailableBeers key={beer.id} name={beer.beerName}></AvailableBeers>
                    ))}
                </div>
                <div style={{marginRight: '20px'}}>
                    <i><u>Red and IPA beers:</u></i>
                    <Red_IPA_Beers array={beers}></Red_IPA_Beers>
                </div>
                <div style={{marginRight: '20px'}}>
                    <i><u>Beers styles:</u></i>
                    <BeersStyles array={beers}></BeersStyles>
                </div>
            </div>
        </>
    )
}

export default Beers