export default function Filho(props) {

    console.log(props.funcao)
    
    return(
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com pai #1</button>
            <button onClick={() => props.funcao("passei no enem")}>Falar com o pai #2</button>
        </div>
    )
}