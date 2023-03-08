// import
import styles from '../src/styles/Cartao.module.css'

// o interface é usado para definir tipos específicos, dessa forma, foi criado um objeto CartaoProps que possui 2 propriedades: bgcolor que é opcional(?)
// e do tipo string e children que também é opcional e é do tipo any, ou seja, qualquer tipo de variável é aceita 
interface CartaoProps {
    bgcolor?: string
    children?: any
}

//a função é criada mandando o objeto criado anteriormente como parâmetro
export default function Cartao(props: CartaoProps) {
    return (
        //criando uma div é estilizada pelo styles cartao
        //e é adicionado um style condicional, onde o bgcolor é mandado pelo children e caso não seja mandado é usado a cor branca.
        //backgroundcolor vai ser = a props.bgcolor, senão for enviado (??) é usado o '#fff'
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? '#fff'
            }}>
            {props.children}
        </div>
    )
}