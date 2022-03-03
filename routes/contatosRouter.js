const express = require('express')
const router = express.Router();
const ControllerContatos = require('../controllers/ControllerContatos')

/* Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | UPDATE  | /contatos/:id

*/

router.get('/', ControllerContatos)
router.get('/:id', ControllerContatos)
router.post('/', ControllerContatos)
router.delete('/:id', ControllerContatos)
router.update('/:id', ControllerContatos)

module.exports = router