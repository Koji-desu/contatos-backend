const express = require('express')
const router = express.Router();
const ControllerContatos = require('../controllers/ControllerContatos')

/* Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Buscar um contatos                           | GET  | /contatos/search
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | PUT  | /contatos/:id
*/

router.get('/', ControllerContatos.index )
router.get('/:id', ControllerContatos.show )
router.get('/search', ControllerContatos.search)
router.post('/', ControllerContatos.create )
router.delete('/:id', ControllerContatos.destroy )
router.put('/:id', ControllerContatos.update )

module.exports = router