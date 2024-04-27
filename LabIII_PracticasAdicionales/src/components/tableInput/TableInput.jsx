
const TableInput = ({legsQuantity, onLegsChange}) => {
    const changeLegsHandler = (event) => {
        onLegsChange(event.target.value)
    }
  return (
    <form>
        <input type="number" value={legsQuantity} onChange={changeLegsHandler}></input>
    </form>
  )
}

export default TableInput