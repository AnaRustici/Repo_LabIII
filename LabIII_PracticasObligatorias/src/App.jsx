import './App.css'
import { titlesArray } from './components/movies/Movies'
import Table from './components/table/Table'

function App() {
  const listTitlesArray = titlesArray.map((title, index) => <p key={index}>{title}</p>)

  return (
    <>
      <div>
        <h2>Práctica obligatoria 1</h2>
        <div>{listTitlesArray}</div>
      </div>
      <div>
        <h2>Práctica obligatoria 2</h2>
        <Table></Table>
      </div>
    </>
  )
}

export default App
