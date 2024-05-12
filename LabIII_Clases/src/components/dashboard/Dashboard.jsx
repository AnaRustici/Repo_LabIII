import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Books from '../books/Books'
import NotFound from '../routes/NotFound'
import MainLayout from '../mainLayout/MainLayout'
import BookForm from '../bookForm/BookForm'
import { BOOKS } from '../data/Data'
import { useState } from 'react'

const Dashboard = () => {
    const [books, setBooks] = useState(BOOKS)

    const saveBookDataHandler = (enteredBookData) => {
        const bookData = {
            ...enteredBookData,
            id: Math.random().toString(),
        };
        setBooks((prev) => [...prev, bookData]);
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <MainLayout>
                    <Books books={books}></Books>
                </MainLayout>
            )
        },
        {
            path: "/book-form",
            element: (
                <MainLayout>
                    <BookForm onBookDataSaved={saveBookDataHandler}></BookForm>
                </MainLayout>
            )
        },
        {
            path: "*",
            element: <NotFound></NotFound>
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Dashboard