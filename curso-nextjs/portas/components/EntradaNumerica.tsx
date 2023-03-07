//import
import styles from "../src/styles/EntradaNumerica.module.css"

interface EntradaNumerica {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNunerica(props: EntradaNumerica) {
    return(
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
        </div>
    )
}