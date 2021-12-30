const UnidadeModel = require('../models/unidade')

function get(req, res) {
    
    res.sende({
        ok: true
    })
}

module.exports = {
    get,
}