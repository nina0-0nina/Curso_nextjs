//import
import PortaModel from "model/porta";

//cria uma função de criação de portas, onde entra como parâmetro qtde do tipo number, portaComPresente do tipo number que retorna 
//uma lista do tipo PortaModel
export default function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    //retorna uma array de tamanho igual a qtde
    return Array.from({ length: qtde }, (_, i) => {
        //o numero da porta vai aumentado de 1 em 1, levando em consideração que o i inicia no 0
        const numero = i + 1
        //temPresente fica true se o numero for igual a portaComPresente e false se não for igual
        const temPresente = numero === portaComPresente
        //retorna um novo PortaModel com o parâmetro numero sendo o número da porta e temPresente que é um boolean se diz se a porta tem ou não presente
        return new PortaModel(numero, temPresente)
    })
}

//cria uma função que atualiza as portas, recebe uma lista do tipo PortaModel e a porta modificada e retorna uma lista do tipo PortaModel
export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    //se o numero da porta atual for igual a da porta modificada, igualAModificada fica true
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero
        //se igualAModificada for true
        if (igualAModificada) {
            //retorna portaModificada
            return portaModificada
        } else {
            //senão retorna: caso a porta modificada estiver aberta retorna a porta atual sem modificação, caso ela esteja fechada a 
            //porta atual é desselecionada
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })

}