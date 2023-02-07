import { useState } from "react"
import NumeroDisplay from "../../../components/NumeroDisplay"
import { Mega } from "../../../functions/Mega"

export default function Megasena(){
    const [numeros, setNumeros] = useState(Mega())

    function renderNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero = {numero}/>)
    }

    return(
        <div>
            <h1>Mega Sena</h1>
            <div>
                {renderNumeros()}
            </div>
        </div>
    )
}