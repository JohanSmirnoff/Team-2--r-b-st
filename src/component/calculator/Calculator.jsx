import { useState } from "react"

const Calculator = () => {

    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState("")
    
    
    const addFunction = () => {
        setResult(Number(firstNumber) + (Number(secondNumber)))
    }
    
    const subFunction = () => {
        setResult(Number(firstNumber) - (Number(secondNumber)))
    }
    
    const multiFunction = () => {
        setResult(Number(firstNumber) * (Number(secondNumber)))
    }
    
    const divideFunction = () => {
        setResult(Number(firstNumber) / (Number(secondNumber)))
    }
    
    return(
        <div>
            <input type="number" placeholder="Tal 1" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)}></input>
            <input type="number" placeholder="Tal 2" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)}></input>
            <button onClick={addFunction}> + </button>
            <button onClick={subFunction}> - </button>
            <button onClick={multiFunction}> * </button>
            <button onClick={divideFunction}> / </button>

            <h2>Resultat: {result}</h2>

            <button onClick={() => {
                {setFirstNumber("")}
                {setSecondNumber("")}
                {setResult("")}
                }}>Rensa</button>
    
        </div>
    )
}

export default Calculator