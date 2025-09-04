import NumericButton from "./components/NumericButton"
import Display from "./components/Display"
import './index.css'
import './fonts.css'
import { useState } from "react"
import { set } from "react-hook-form"
function App() {

  const numbers_color = { background: "bg-gray-300", font: "text-black " }
  const operations_color = { background: "bg-gray-400", font: "text-white" }
  const [conta, setConta] = useState("")
  const [resultado, setResultado] = useState(0)

  const gerenciarClique=(valorBotao)=>{
    if (valorBotao == "AC") {
      setConta("")
      setResultado("")
      return
    }
    else if (valorBotao == "=") {
      setConta(resultado)
      return
    }

    const novaConta = conta + valorBotao
    setConta(novaConta)
    try {
      const novoResultado = eval(novaConta)
      setResultado(novoResultado)
    } 
    catch (e) {
      return
    }

  }

  return (
    <>
      <div className="roboto-sitefont justify-items-center">
        <Display conta={conta || 0} resultado={resultado} />
        <div className="grid grid-cols-4 gap-2">
          <NumericButton valor={"AC"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("AC")}/>
          <NumericButton valor={"+-"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("+-")}/>
          <NumericButton valor={"%"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("%")}/>
          <NumericButton valor={"X"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("*")}/>
          <NumericButton valor={7} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("7")}/>
          <NumericButton valor={8} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("8")}/>
          <NumericButton valor={9} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("9")}/>
          <NumericButton valor={"/"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("/")}/>
          <NumericButton valor={4} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("4")}/>
          <NumericButton valor={5} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("5")}/>
          <NumericButton valor={6} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("6")}/>
          <NumericButton valor={"-"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("-")}/>
          <NumericButton valor={1} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("1")}/>
          <NumericButton valor={2} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("2")}/>
          <NumericButton valor={3} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("3")}/>
          <NumericButton valor={"+"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("+")}/>
          <NumericButton valor={"x²"} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique("**2")}/>
          <NumericButton valor={0} cor_botao={numbers_color.background} cor_texto={numbers_color.font} onClick={() => gerenciarClique("0")}/>
          <NumericButton valor={"."} cor_botao={operations_color.background} cor_texto={operations_color.font} onClick={() => gerenciarClique(".")}/>
          <NumericButton valor={"="} cor_botao={"bg-black"} cor_texto={"text-white"} onClick={() => gerenciarClique("=")}/>
        </div>
      </div>

    </>
  )
}

export default App
