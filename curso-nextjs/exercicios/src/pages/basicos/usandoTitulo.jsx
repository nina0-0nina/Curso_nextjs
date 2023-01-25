// imports
import Titulo from '../../../components/Titulo'

export default function usandoTitulo() {
    return(
        <div>
            <Titulo 
                principal = "Página de cadastro"
                secundario = "Incluir, alterar e excluir coisas!"
            />

            <Titulo 
                principal = "blabla"
                secundario = "bleble"
                //pequeno = {true}
                pequeno
            />
        </div>
    )
}