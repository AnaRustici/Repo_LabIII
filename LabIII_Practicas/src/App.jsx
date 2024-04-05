import './App.css'
import Beers from './components/practica2/beers/Beers'
import { titlesArray } from './components/practica1/Practica1'
import Products from './components/practica2_adicional/products/Products';
import Persons from './components/practica2_adicional/persons/Persons';
import Family from './components/practica2_adicional/family/Family';

const listTitlesArray = titlesArray.map((title, index) => <p key={index}>{title}</p>)

const products = ["table","couch","chair1","chair2"];
const names = ["Parker","Simmons","Lewis","Poe"];
const persons = [
  { name: 'Juan', age: 26 },
  { name: 'Gabriel', age: 27 }, 
  { name: 'Valentina', age: 22 }, 
  { name: 'Paula', age: 25 }, 
  { name: 'Andrés', age: 20 } 
];

function App() {

  return (
    <>
      <div>
        <h3>Práctica obligatoria 1</h3>
        <div>{listTitlesArray}</div>
      </div>
      <Beers></Beers>
      <h2>Práctica adicional</h2>
      <div className='div-prac-ad'>
        <Products products={products}></Products>
        <Persons names={names}></Persons>
        <Family persons={persons}></Family>
      </div>
    </>
  )
}

export default App
