import { useEffect, useState } from "react"
import "./BookForm.css"
import { Button } from 'react-bootstrap'

const BookForm = ({ onBookDataSaved }) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAuthor, setEnteredAuthor] = useState("")
    const [enteredPageCount, setEnteredPageCount] = useState(0)
    const [enteredRating, setEnteredRating] = useState(0)
    const [enteredImgURL, setEnteredImgURL] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        setFormValid(
            enteredAuthor !== "" &&
            enteredPageCount !== "" &&
            enteredRating !== "" &&
            enteredTitle !== ""
        )
    }, [enteredAuthor, enteredPageCount, enteredRating, enteredTitle])

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const authorHandler = (event) => {
        setEnteredAuthor(event.target.value)
    }
    const pageCountHandler = (event) => {
        setEnteredPageCount(event.target.value)
    }
    const ratingHandler = (event) => {
        setEnteredRating(event.target.value)
    }
    const imageHandler = (event) => {
        setEnteredImgURL(event.target.value)
    }

    const showFormHandler = () => {
        setShowForm(!showForm)
    }

    const submitBookHandler = (event) => {
        event.preventDefault()
        const bookData = {
            bookTitle: enteredTitle,
            bookAuthor: enteredAuthor,
            bookRating: enteredRating,
            pageCount: enteredPageCount,
            imageUrl: enteredImgURL,
            available: true
        }
        onBookDataSaved(bookData);
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredRating("");
        setEnteredPageCount("");
        setEnteredImgURL("");
    }

    return (
        <div className="div-form">
            <Button variant="dark" onClick={showFormHandler}>
                {showForm ? 'Esconder' : 'Agregar libro'}
            </Button>
            {showForm && (
                <form onSubmit={submitBookHandler}>
                    <div className="new-book-controls">
                        <div className="new-book-control">
                            <label>Título</label>
                            <input value={enteredTitle} type="text" onChange={titleHandler}></input>
                        </div>
                        <div className="new-book-control">
                            <label>Autor</label>
                            <input value={enteredAuthor} type="text" onChange={authorHandler}></input>
                        </div>
                        <div className="new-book-control">
                            <label>Páginas</label>
                            <input value={enteredPageCount} type="number" min="1" step="1" onChange={pageCountHandler}></input>
                        </div>
                        <div className="new-book-control">
                            <label>Puntuación</label>
                            <input value={enteredRating} type="number" min={0} max={5} onChange={ratingHandler}></input>
                        </div>
                        <div className="new-book-control">
                            <label>URL de imagen</label>
                            <input value={enteredImgURL} type="text" onChange={imageHandler}></input>
                        </div>
                        <div className="new-book-actions">
                            <button type="submit" disabled={!formValid}>Agregar lectura</button>
                        </div>
                    </div>

                </form>
            )}

        </div>

    )
}

export default BookForm