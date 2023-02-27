export default function params(req, res){
    res.status(200).json({
        params: req.query
    })
}
//[nome] - método dinâmico - parâmetro obrigatório
//[...nome] - aceita mais de um param. {a/v/b é aceito, mas deve-se tomar cuidado com espaço}
//[[nome]] - para. não é obrigatório