import { useEffect, useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Alert, Container } from 'react-bootstrap'
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext'
import './Login.css'

const Login = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => console.log(error))
  }, [])

  const [enteredUser, setEnteredUser] = useState('')
  const [enteredPass, setEnteredPass] = useState('')
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    exists: false,
  })
  const navigate = useNavigate()

  const { handleLogin, tryHandleLogin } = useContext(AuthenticationContext)

  const usernameHandler = (event) => {
    setErrors({ ...errors, username: false })
    setEnteredUser(event.target.value)
  }

  const passwordHandler = (event) => {
    setErrors({ ...errors, password: false })
    setEnteredPass(event.target.value)
  }

  const loginHandler = (event) => {
    event.preventDefault()
    setErrors({ ...errors, exists: false })

    if (enteredUser.length === 0) {
      usernameRef.current.focus()
      setErrors({ ...errors, username: true })
      return
    }

    if (enteredPass.length === 0) {
      passwordRef.current.focus()
      setErrors({ ...errors, password: true })
      return
    }

    const searchedUser = users.filter((u) => u.name === enteredUser && u.password === enteredPass)

    if(searchedUser.length === 0){
      setErrors({ ...errors, exists: true })
      setEnteredUser('')
      setEnteredPass('')
      return
      
    } else {
      const user = searchedUser[0]
      if(user.role === "client"){
        tryHandleLogin(enteredUser, user.role, user.shopping_cart)
      } else{
        tryHandleLogin(enteredUser, user.role)
      }
    }

    /*
    if (users.some(user => user.name === enteredUser && user.password === enteredPass)) {
      console.log("usuario encontrado")
    } else {
      setErrors({ ...errors, exists: true })
      setEnteredUser('')
      setEnteredPass('')
      return
    } */

    //handleLogin(enteredUser)
    navigate("/")

    setEnteredUser('')
    setEnteredPass('')
  }

  return (
    <Container className='login'>
      <Form className='form-login' onSubmit={loginHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            ref={usernameRef}
            value={enteredUser}
            type='text'
            placeholder='Nombre de usuario'
            onChange={usernameHandler}
            className={errors.username && "border border-danger"}>

          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            value={enteredPass}
            type='text'
            placeholder='Contraseña'
            onChange={passwordHandler}
            className={errors.password && "border border-danger"}>

          </Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>Login</Button>
        <Button variant='outline-primary'>Register</Button>
        {errors.exists && <Alert variant='danger' className='mt-3'>Credenciales inválidas</Alert>}
        {(errors.username || errors.password) && <Alert variant='warning' className='mt-3'>Debes completar todos los campos</Alert>}
      </Form>
    </Container>
  )
}

export default Login