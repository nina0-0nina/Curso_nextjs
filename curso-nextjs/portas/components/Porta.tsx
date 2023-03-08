//import
import styles from "../src/styles/Porta.module.css"
import PortaModel from "../model/porta"
import Presente from "./Presente"

// o interface é usado para definir tipos específicos, dessa forma, foi criado um objeto PortaProps que possui 2 propriedades: value
// do tipo PortaModel e onChange que é uma arrow function que recebe uma nova porta (tipo PortaModel) e não retorna nada
interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

//a função é criada mandando o objeto criado anteriormente como parâmetro, chamando-o de props
export default function Porta(props: PortaProps) {

    //é criada uma variável chamada porta que recebe props.value
    const porta = props.value
    //é criada uma variável chamada selecionada que verifica se a porta está selecionada e não está aberta o estilo de selecionada é aplicada, caso
    //a porta esteja aberta, é passado uma string vazia, ou seja, o estilo não é aplicado
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    //é criada uma variável chamada alternarSelecao que recebe uma arrow function que é chamada através de um evento do mouse e chama a função onChange
    //que chama outra função, alternarSeleção 
    const alternarSelecao = (e: React.MouseEvent<HTMLDivElement>) => props.onChange(porta.alternarSelecao())

    //é criada uma variável chamada abrir que recebe uma arrow function que é chamada através de um evento do mouse e para a propagação do mouse
    //impedindo que passe para a alternarSelecao e chama a função props.onChange que chama a função porta.abrir 
    const abrir = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }


    //função para as portas aparecerem, basicamente o design da porta
    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                {/* cria a maçaneta que chama a função abrir quando é ativado através do click do mouse */}
                <div className={styles.macaneta}
                    onClick={abrir}></div>
            </div>
        )
    }

    return (
        //Cria area da porta, que ao click do mouse chama a função alternarSelecao
        <div className={styles.area} onClick={alternarSelecao}>
            {/* se a porta estiver selecionada, o styles.estrutura vai atribuir as características do .selecionada */}
            <div className={`${styles.estrutura} ${selecionada}`}>
                {/* se a porta estiver fechada irá rebderizar a porta fechada, senão, verá se a porta tem presente, se tiver rederiza o presente, senão
                não renderiza nada */}
                {porta.fechada ?
                    renderizarPorta() :
                    porta.temPresente ? <Presente /> : false
                }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}