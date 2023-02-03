import Item from "../../../components/Item"
import Lista from "../../../components/Lista"

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="item #11"/>
                <Item conteudo="item #12"/>
                <Item conteudo="item #13"/>
            </Lista>
        </div>
    )
}