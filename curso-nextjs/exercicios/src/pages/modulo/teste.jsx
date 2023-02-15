import Padrao, {Comp1, Comp2, Comp4, Comp5, Comp6} from '../../../components/Modulo/funcionais';

export default function Teste(){
    return(
        <div>
            <Comp1/>
            <Comp2/> 
            <Padrao/>     
            <Comp4/>
            <Comp5/>
            <Comp6 msg='legal!'/>
        </div>
    )
}