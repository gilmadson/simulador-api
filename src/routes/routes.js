const router = require('express').Router()

const UnidadeController = require('../controllers/unidade')

//VERBOS HTTP GET, POST, PUT E DELETE

router.get('/unidade', UnidadeController.get)
//router.post('/unidade', UnidadeController.post)
//router.put('/unidade:id', UnidadeController.put)
//router.delete('/undiade:id', UnidadeController.delete)

module.exports = router