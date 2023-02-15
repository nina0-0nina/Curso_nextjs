export function Comp1(){
    return <h2>Comp #1</h2>
}

export const Comp2 = function(){
    return <h2>Comp #2</h2>   
}

export default function () {
    return(
        <div>
            <h2>Comp #3</h2>
        </div>
    )
}

export const Comp4 = () => {
    return(
        <h2>Comp #4</h2>
    )
}

const Comp5 = () => <h2>Comp #5</h2>

const Comp6 = props => (
    <div>
        <h2>Comp #6 - {props.msg}</h2>
    </div>
)

export {
    Comp5, Comp6
}