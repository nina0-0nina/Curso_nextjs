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
    const router = useRouter()
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
               {renderizarPortas()} 
            </div>

            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}