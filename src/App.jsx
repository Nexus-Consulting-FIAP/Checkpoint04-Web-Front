import NumericButton from "./components/NumericButton"
import './Index.css'
function App() {

  return (
    <>
    <div className="flex flex-row justify-center items-center">
      <NumericButton valor={0} />
      <NumericButton valor={1} />
      <NumericButton valor={2} />
      <NumericButton valor={3} />
      <NumericButton valor={4} />
      <NumericButton valor={5} />
      <NumericButton valor={6} />
      <NumericButton valor={7} />
      <NumericButton valor={8} />
      <NumericButton valor={9} />
    </div>
    </>
  )
}

export default App
