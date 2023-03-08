//import
import styles from "../src/styles/EntradaNumerica.module.css"

interface EntradaNumerica {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNunerica(props: EntradaNumerica) {

    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return(
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>

            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}