interface PessoaProps {
    nome: string
    idade?: number
}

export default function Pessoa(props: any) {
    return(
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'Não informada'}</div>
        </div>
    )
}