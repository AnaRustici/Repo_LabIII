import React, { useState } from 'react'
import EachBeer from '../eachBeer/EachBeer'
import AvailableBeers from '../availableBeers/AvailableBeers'
import Red_IPA_Beers from '../redIPAbeers/Red_IPA_Beers'
import BeersStyles from '../beersStyles/BeersStyles'
import ChangeDollar from '../changeDollar/ChangeDollar'
import NewBeer from '../newBeer/NewBeer'

const BEERS = [
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
    const [newPrice, setNewPrice] = useState(false)
    const [beers, setBeers] = useState(BEERS)

    const priceHandler = () => {
        setNewPrice(!newPrice)
    }

    const saveBeerDataHandler = (enteredBeerData) => {
        const beerData = {
            ...enteredBeerData,
            id: Math.random().toString()
        }
        setBeers((prev) => [...prev, beerData])
    }

    return (
        <>
            <h2>Beers</h2>
            <NewBeer onBeerDataSaved={saveBeerDataHandler}></NewBeer>
            <div style={{display: 'flex'}}>
                <div style={{marginRight: '20px'}}>
                    <i><u>Beer and price:</u></i>
                    {beers.map((beer) => (
                        <EachBeer newPrice={newPrice} key={beer.id} name={beer.beerName} price={beer.price}></EachBeer>
                    ))}
                    <ChangeDollar priceHandler={priceHandler} currentPrice={newPrice}></ChangeDollar>
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