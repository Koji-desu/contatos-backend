const express = require('express')
const router = express.Router();
const ControllerContatos = require('../controllers/ControllerContatos')

/* Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | PUT  | /contatos/:id

*/

router.get('/', (req, res)=>{res.send('get contatos')})
router.get('/:id', (req, res)=>{res.send(`get contatos ${req.params.id}`)})
router.post('/', (req, res)=>{res.send('post contatos')})
router.delete('/:id', (req, res)=>{res.send(`delete contato ${req.params.id}`)})
router.put('/:id', (req, res)=>{res.send(`update contato ${req.params.id}`)})

module.exports = router