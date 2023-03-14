// imports
import styles from "../styles/Formulario.module.css";
import Cartao from "components/Cartao";
import Link from "next/link";
import EntradaNumerica from "components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {

  //criação de constantes
  //criação de componentes funcionais, onde pega um valor inicial e retorna dois arrays: o valor atual e uma função para modificar o valor
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
          // chama a função setQtdePortas quando o valu qtdePortas eé modificado
            text='Qtde Portas' 
            value={qtdePortas} 
            onChange={novaQtde => setQtdePortas(novaQtde)}/>
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica 
          // chama a função setComPresente quando o valu ComPresent eé modificado
              text='Porta com Presente?' 
              value={comPresente} 
              onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
        </Cartao>
        <Cartao bgcolor="#28a085">
          {/* navega para a página do jogo, mandadno a qtdePortas selecionada e a porta com presente selecionada */}
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>

  )

}
