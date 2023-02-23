import Link from "next/link"

export default function rotas(){
    return(
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Anna">
                    <li>Params</li>
                </Link>

                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>

                <Link href="/rotas/123/Maria">
                    <li>Maria</li>
                </Link>
            </ul>
        </div>
    )
}