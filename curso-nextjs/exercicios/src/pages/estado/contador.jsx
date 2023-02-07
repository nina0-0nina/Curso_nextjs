import { useState } from "react"
import NumeroDisplay from "../../../components/NumeroDisplay"

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
           <NumeroDisplay num = {num}/>
            <h2>Valor: {num}</h2> 
            <div>
                <button onClick={aumentarValor}>+ 1</button>
                <button onClick={reduzirValor}>- 1</button>
            </div>
        </div>
    )
}