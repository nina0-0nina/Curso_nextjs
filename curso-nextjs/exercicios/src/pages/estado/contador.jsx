import { useState } from "react"
import ContadorDisplay from "../../../components/ContadorDisplay"

export default function Contador(){

    const [num, setNum] = useState(0)

    function aumentarValor(){
        setNum(num + 1)
    }

    function reduzirValor(){
        setNum(num - 1)
    }

    return(
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
           <h1>Contador</h1>
           <ContadorDisplay num = {num}></ContadorDisplay>
            <h2>Valor: {num}</h2> 
            <div>
                <button onClick={aumentarValor}>+ 1</button>
                <button onClick={reduzirValor}>- 1</button>
            </div>
        </div>
    )
}