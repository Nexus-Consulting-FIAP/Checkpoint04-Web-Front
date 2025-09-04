import NumericButton from "./components/NumericButton"
import Display from "./components/Display"
import './Index.css'
import './Fonts.css'
import { useState } from "react"
function App() {

  const numbers_color = { background: "bg-gray-300", font: "text-black " }
  const operations_color = { background: "bg-gray-400", font: "text-white" }
  const [valor, setValor] = useState(0)

  return (
    <>
      <div className="roboto-sitefont justify-items-center">
        <Display numero={valor} />
        <div className="grid grid-cols-4 gap-2">
          <NumericButton valor={"AC"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={"+-"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={"%"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={"X"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={7} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={8} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={9} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={"/"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={4} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={5} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={6} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={"-"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={1} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={2} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={3} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={"+"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={"xD"} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={0} cor_botao={numbers_color.background} cor_texto={numbers_color.font} />
          <NumericButton valor={"."} cor_botao={operations_color.background} cor_texto={operations_color.font} />
          <NumericButton valor={"="} cor_botao={"bg-black"} cor_texto={"text-white"} />
        </div>
      </div>

    </>
  )
}

export default App
