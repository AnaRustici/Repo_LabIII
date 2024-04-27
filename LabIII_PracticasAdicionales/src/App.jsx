import './App.css'
import Products from './components/products/Products'
import Persons from './components/persons/Persons'
import Family from './components/family/Family'
import TableForm from './components/tableForm/TableForm';

function App() {

  const products = ["table", "couch", "chair1", "chair2"];
  const names = ["Parker", "Simmons", "Lewis", "Poe"];
  const persons = [
    { name: 'Juan', age: 26 },
    { name: 'Gabriel', age: 27 },
    { name: 'Valentina', age: 22 },
    { name: 'Paula', age: 25 },
    { name: 'Andrés', age: 20 }
  ];

  return (
    <>
      <h2><i>Práctica adicional 1</i></h2>
      <div className='div-ejercicios'>
        <Products products={products}></Products>
        <Persons names={names}></Persons>
        <Family persons={persons}></Family>
      </div>
      <h2><i>Práctica adicional 2</i></h2>
      <TableForm></TableForm>

    </>
  )
}

export default App
