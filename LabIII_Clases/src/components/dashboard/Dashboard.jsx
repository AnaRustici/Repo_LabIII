import Books from '../books/Books'
import { useState, useEffect, useContext } from 'react'
import SearchBook from '../searchBook/SearchBook'
import BookForm from '../bookForm/BookForm'
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext'
import { Button } from 'react-bootstrap'

const Dashboard = () => {
    const [booksArray, setBooksArray] = useState([])

    const { handleLogout, user } = useContext(AuthenticationContext)

    useEffect(() => {
        fetch("http://localhost:3000/products", {
            headers: {
                accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setBooksArray(data)
            })
            .catch((error) => console.log(error))
    }, [])

    const [text, setText] = useState('')

    const inputHandler = (inputText) => {
        setText(inputText)
    }

    const booksSearched = booksArray.filter((book) => book.bookTitle.toLowerCase().includes(text.toLowerCase()))

    const saveBookDataHandler = (enteredBookData) => {
        const bookData = {
            ...enteredBookData
        }
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(bookData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setBooksArray((prev) => [...prev, data])
            })
            .catch((error) => console.log(error))
    }

    const onHandleClick = () => {
        handleLogout();
    }

    const deleteBookHandler = (bookId) => {
        fetch(`http://localhost:3000/products/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const newArray = booksArray.filter((b) => b.id !== bookId)
                setBooksArray(newArray)
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <>
            <div className='main-div'>
                <Button onClick={onHandleClick}>Cerrar Sesión</Button>
                <h2>Books Champion App</h2>
                {user.username === "pablo" ? <p>¡Bienvenido, {user.username}!</p> : <p>¡Bienvenida, {user.username}!</p>}
                <SearchBook onSearch={inputHandler}></SearchBook>
                <BookForm onBookDataSaved={saveBookDataHandler}></BookForm>
                <Books books={booksSearched} onDeletedBook={deleteBookHandler}></Books>
            </div>

        </>

    )
}

export default Dashboard