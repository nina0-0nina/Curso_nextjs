//imports
import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "components/Porta"
import criarPortas from "functions/portas"
import { atualizarPortas } from "functions/portas"
import Link from "next/link"
import { useRouter } from "next/router"


export default function Jogo() {
    //criação de constantes
    //inicialização do router - utilizado para navegar entre páginas
    const router = useRouter()

    //criação de componentes funcionais, onde pega um valor inicial e retorna dois arrays: o valor atual e uma função para modificar o valor
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    //criando um hook que vai executar as funções quanto 'portas' é modificado
    useEffect(() => {
        //criando constantes que receberão os valores de router.query.portas e router.query.temPresente, o + é para tranformar em number
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        //validando a porta: só irá criar de 3 até no  máximo 100 portas
        const qtdePortasValida = portas >= 3 && portas <= 100
        //validando presente: o presente deve estar entre a porta 1 e até o número total de portas
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        //o set válido vai modificar o valido para true se qtdePortasValida e temPresenteValido forem true
        setValido(qtdePortasValida && temPresenteValido)
    }, [portas])

    //criando um hook que vai executar as funções quanto 'router?.query' é modificado
    useEffect(() => {
        //criando constantes que receberão os valores de router.query.portas e router.query.temPresente, o + é para tranformar em number
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        //o setPortas vai chamar a função criarPortas, mandando portas e temPresente como param.
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    //função para renderizar a porta
    function renderizarPortas() {
        //chamando a função map em 'portas', onde vai aplicar a função para todos os elementos de 'portas' e retornar um novo set de array
        return portas.map(porta => {
            //retornar uma nova porta com o número como key e o porta como value para cada elemnto no array 'portas'
            return <Porta key={porta.numero} value={porta}
                //call back function que chama novaPorta quando o children é modificado
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {/* chama a renderizarPortas apenas quando a variável valido está setado para True */}
                {valido ?
                    renderizarPortas() :
                    // caso valido esteja setado como false, aparecerá o seguinte h1
                    <h1>Valores inválidos</h1>}
            </div>

            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}