const date = (req, res, next)=>{
    data = new Date().toISOString().split('T')[0]
    next()
    
}

module.exports = date