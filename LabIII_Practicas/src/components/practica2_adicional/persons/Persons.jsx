import Person from "../person/Person"

const Persons = ({names}) => {
    const filteredNames = names.filter((n) => n[0] === 'P').map((n, index) => <Person key={index} name={n}></Person>)
  return (
    <div>
        <h4>Ejercicio 2</h4>
        {filteredNames}
    </div>
  )
}

export default Persons