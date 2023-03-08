//import
import styles from "../src/styles/EntradaNumerica.module.css"

// o interface é usado para definir tipos específicos, dessa forma, foi criado um objeto EntradaNumerica que possui 3 propriedades: text
// do tipo string, value é do tipo number e onChange que é uma arrow functionque recebe um novo value (tipo number) e não retorna nada
interface EntradaNumerica {
    text: string
    value: number
    onChange: (newValue: number) => void
}

//a função é criada mandando o objeto criado anteriormente como parâmetro, chamando-o de props
export default function EntradaNunerica(props: EntradaNumerica) {

    //é criado duas arrow function para incrementar e decrementar o props.value
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        //criando uma div q é estilizada pelo styles entradaNumerica
        <div className={styles.entradaNumerica}>
            {/* mostrando o props.text e o props.value, o primeiro estilizado por .text e o segundo por .value */}
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>

            {/* criando uma div q é estilizada pelo styles botoes */}
            <div className={styles.botoes}>
                {/* botoes que incrementam ou decrementam o valor de value, ambos estilizados por .btn */}
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}