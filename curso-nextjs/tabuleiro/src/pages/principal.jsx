import Tabuleiro from '../../components/Tabuleiro'
import styles from '../../styles/Home.module.css'

export default function principal(){
    return (
        <div className={styles.container}>
         <Tabuleiro></Tabuleiro>
        </div>
    )
}