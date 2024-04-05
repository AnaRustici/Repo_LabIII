import FamilyMember from "../familyMember/FamilyMember"

const Family = ({persons}) => {
    const orderedByAge = persons.sort((a, b) => b.age - a.age).map((p, index) => <FamilyMember key={index} name={p.name} age={p.age}></FamilyMember>)
  return (
    <div>
        <h4>Ejercicio 3</h4>
        {orderedByAge}
    </div>
  )
}

export default Family