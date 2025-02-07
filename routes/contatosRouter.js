const express = require('express')
const router = express.Router();
const ControllerContatos = require('../controllers/ControllerContatos')
const validaToken = require('../middlewares/validaToken')

/* Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Buscar um contatos                           | GET  | /contatos/search
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | PUT  | /contatos/:id
*/

router.get('/', validaToken, ControllerContatos.index )
router.get('/search', ControllerContatos.search)
router.get('/:id', ControllerContatos.show )
router.post('/', ControllerContatos.create )
router.delete('/:id', ControllerContatos.destroy )
router.put('/:id', ControllerContatos.update )

module.exports = router