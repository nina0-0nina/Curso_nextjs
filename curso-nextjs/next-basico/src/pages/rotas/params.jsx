import { useRouter } from "next/router"

export default function Params(){
    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome
    
    return(
        <div>
            <h1>Params: {id} e {nome}</h1>
        </div>
    )
}