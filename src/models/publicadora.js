

let nextID = 2
const model = (body, id = nextID++)=>{
    console.log(body.criado_em);
    console.log(body.atualizado_em);
    if(body.nome != '' && body.nome != undefined && body.criado_em == undefined){
        return{
            id,
            nome: body.nome,
            criado_em: body.criado_em
        }
    } else  {
        return{
            id,
            nome: body.nome,
            criado_em: body.criado_em,
            atualizado_em: body.atualizado_em
        }
    }
}

module.exports = model