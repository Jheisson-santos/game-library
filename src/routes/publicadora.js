const express = require('express')
const router = express.Router()
const {index, show, store, update, destroy} = require('../controllers/publicadora.js')
const date = require('../middlewares/data.js')

router.get('/', (req, res)=>{
    res.json(index())
})

router.get('/:id', (req, res)=>{
    res.json(show(req.params.id))
})

router.post('/',date, (req,res)=>{
    const code = store(req.body)
    res.status(code).json()
})

router.put('/:id',date, (req,res)=>{
    const code = update(req.body, req.params.id)
    res.status(code).json()
})

router.delete('/:id', (req,res)=>{
    const code = destroy(req.params.id)
    res.status(code).json()
})

module.exports = router