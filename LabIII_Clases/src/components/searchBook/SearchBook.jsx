import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './SearchBook.css'

const SearchBook = ({onSearch}) => {
    const handleInputChange = (event) => {
      onSearch(event.target.value)
    }
  return (
    <InputGroup className='search-input'>
      <Form.Control onChange={handleInputChange} placeholder="Search by book name"></Form.Control>
    </InputGroup>
    
  )
}

export default SearchBook