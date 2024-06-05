import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Protected from './components/routes/Protected'
import NotFound from './components/routes/NotFound'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import MainLayout from './components/mainLayout/MainLayout'
import BookForm from './components/bookForm/BookForm'
import { useState } from 'react'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <MainLayout>
            <Dashboard></Dashboard>
          </MainLayout>
        </Protected>
      )
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
    {
      path: "/login",
      element: <Login></Login>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App