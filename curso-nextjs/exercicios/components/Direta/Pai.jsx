import Filho from "./Filho";

export default function Pai(props){
    return(
       <div>
            <h1>Familía {props.familia}</h1>
            <Filho nome="Ana" familia = {props.familia}/>
            <Filho nome="Rita" familia = {props.familia}/>
            <Filho nome="Maria" familia = {props.familia}/>
            <Filho {...props} nome="Gabriel" />
       </div> 
    )
}