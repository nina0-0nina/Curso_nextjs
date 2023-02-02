import Casa from './Casa';
import styles from '../styles/Linha.module.css'

export default function Linha (props){
    return (
        <div className={styles.linha}>
            <Casa/>
            <Casa preta/>
            <Casa/>
            <Casa preta/>
            <Casa/>
            <Casa preta/>
            <Casa/>
            <Casa preta/>
        </div>
    )
}