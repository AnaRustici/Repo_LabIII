import { useState } from "react"
import './NewBeer.css'

const NewBeer = ({onBeerDataSaved}) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredStyle, setEnteredStyle] = useState('')

    const nameHandler = (event) => {
        setEnteredName(event.target.value)
    }
    const priceHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const styleHandler = (event) => {
        setEnteredStyle(event.target.value)
    }

    const submitBeerHandler = (event) => {
        event.preventDefault()
        const beerData = {
            beerName: enteredName,
            beerStyle: enteredStyle,
            price: parseInt(enteredPrice, 10),
            available: true
        }
        onBeerDataSaved(beerData)
        setEnteredName('')
        setEnteredPrice('')
        setEnteredStyle('')
    }

    return (
        <div>
            <form onSubmit={submitBeerHandler}>
                <div className="new-beer-controls">
                    <div className="new-beer-control">
                        <label>Beer Name</label>
                        <input value={enteredName} type="text" onChange={nameHandler}></input>
                    </div>
                    <div className="new-beer-control">
                        <label>Price -in dollars-</label>
                        <input value={enteredPrice} type="text" onChange={priceHandler}></input>
                    </div>
                    <div className="new-beer-control">
                        <label>Style</label>
                        <input value={enteredStyle} type="text" onChange={styleHandler}></input>
                    </div>
                    <div className="new-beer-actions">
                        <button type="submit">Add beer</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default NewBeer