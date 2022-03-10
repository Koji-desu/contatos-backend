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

    create: (req, res)=>{
        // let {nome, email} = req.body

        // let usuario = Usuario.create({
        //     nome, email
        // })
        res.send(`Criando contato`)
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