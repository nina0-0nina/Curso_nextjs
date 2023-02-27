const usuarios = []

export default function form(req, res){
    if(req.method === "POST"){
        post()

    }else{
        res.status(200).json(usuarios)
    }

    
} 

function post (req, res) {
    const usuario = JSON.parse(req.body)
    usuarios.push(usuario)
    res.status(200).send()
}