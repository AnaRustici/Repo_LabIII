import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    
    const buttonHandler = () => {
        navigate('/')
    }
    return (
        <>
            <div>NotFound</div>
            <Button onClick={buttonHandler}>Back to main page</Button>
        </>
    )
}

export default NotFound