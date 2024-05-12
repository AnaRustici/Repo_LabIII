import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()
  const handleHomeNavigation = () => {
    navigate("/")
  }
  const handleFormNavigation = () => {
    navigate("/book-form")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={handleHomeNavigation}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={handleFormNavigation}>Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;