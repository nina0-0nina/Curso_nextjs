import { useState } from "react"
import ContadorDisplay from "../../../components/ContadorDisplay"

export default function Contador(){

    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () =>setNumero(numero - 1)

    return(
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
           <h1>Contador</h1>
           <ContadorDisplay numero = {numero}/>
            <h2>Valor: {numero}</h2> 
            <div>
                <button onClick={this.dec}>- 1</button>
                <button onClick={this.inc}>+ 1</button>
            </div>
        </div>
    )
}