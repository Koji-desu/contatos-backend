const userID = 1
const {sequelize, Sequelize} = require('../database/models')


module.exports = {
    index: async (req, res)=>{
        let sql = `SELECT id, nome FROM contatos WHERE usuarios_id=${userID}`;
        let contatos = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT}); 
        res.json(contatos)
        res.status(200).json(contatos)
    },
    show: async(req, res)=>{
        let {id} = req.params
        let sql = `SELECT id, nome FROM contatos WHERE usuarios_id=${userID} AND id=${req.params.id}`;
        let resultado = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT})
        if(resultado.length == 0){
            res.status(404).json({msg: "contato inexistente"});
        } else { res.status(200).json(resultado) }
       
    },
    search: async(req, res)=>{
       
       let trechoBuscado = req.query.q
       let sql = `SELECT id, nome FROM contatos WHERE usuarios_id=${userID} AND nome LIKE '%${trechoBuscado}%'`;
       let resultado = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT});
       res.status(200).json(resultado)
    },

    create: async(req, res)=>{

        // Capturando as info do body
        let {nome, emails, telefones} = req.body;

        // Salvar o nome contato
        
        let sql = `INSERT INTO contatos (nome, usuarios_id) VALUES ("${nome}" , "${userID}")`
        let resultado = await sequelize.query(sql, {type: sequelize.QueryTypes.INSERT})

        // Levantar o ID do contato recém criado
        let [idCriado, nLinhas] = resultado

        // Salvar os emails 
        emails = emails.map( (e)=> {return {email: e, contatos_id: idCriado}})
        sequelize.queryInterface.bulkInsert('emails', emails);
        
        // Salvar os telefones
        telefones = telefones.map( (t)=> {return {telefone: t, contatos_id: idCriado}})
        sequelize.queryInterface.bulkInsert('telefones', telefones);
        
        // Enviar uma resposta para o cliente
        res.json({msg:'ok', idCriado})
    },
    destroy: (req, res)=>{
        let {id} = req.params
        res.send(`Excluindo contato ${id}`)
    },
    update: (req, res)=>{
        let {id} = req.params
        res.send(`Editar contato ${id}`)
    }
}