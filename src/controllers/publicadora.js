const model = require('../models/publicadora.js')
const db = [{id: 1, nome:"joana"}]

const store = (body)=>{
    const novo = model(body)
    if(novo){
        db.push(novo)
        return 200
    } 
    return 400
}

const index = ()=>db

const show = (id)=>db.find((el)=>el.id == id)

const update = (body, id)=>{
    const index = db.findIndex((el)=>el.id == id)
    const novo = model(body, id, body.criado_em )
    if(index != -1 && novo){
        db[index] = novo
        return 200
    }
    return 400
}

const destroy = (id)=>{
    const index = db.findIndex((el)=>el.id == id)
    if(index != -1){
        db.splice(index, 1)
        return 200
}
return 400
}

module.exports = {store, index, show, update, destroy}