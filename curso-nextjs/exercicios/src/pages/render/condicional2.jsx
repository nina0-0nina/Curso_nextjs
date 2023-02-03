import If from "../../../components/If";

export default function condicional2(){
    const num = 5
    return(
        <div>
            <If teste={num % 2 === 0}>
                <h1>O número {num} é par</h1>
            </If>

            <If teste = {num % 2 === 1}>
                <h1>O número {num} é ímpar</h1>
            </If>
        </div>
    )
}