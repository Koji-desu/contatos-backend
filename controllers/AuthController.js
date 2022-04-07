const {sequelize} = require('../database/models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const AuthController = {
    login: async(req, res)=>{

         //Capturar o email e a senha
        const {email, senha} = req.body

        // Levantar do BD o usuario com o email dado
        let sql = `SELECT id, senha, nome FROM usuarios WHERE email='${email}'`;
        let resultados = await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT})


        // Caso não haja usuario, retornar erro 403
        if(resultados.length == 0){
            return res.status(403).json({msg: "Falha no login"})
        } 
        
        // capturar o id e a senha criptografada, levantados do BD
        let id = resultados[0].id
        let senhaCriptografada = resultados[0].senha
        let nome = resultados[0].nome

        // Testar a senha do usuario
        if(!bcrypt.compareSync(senha, senhaCriptografada)){
            // Se senha não estiver ok, retornar erro 403
            return res.status(403).json({msg: "Falha no login"})
        }

        // Criar um objeto com os dados úteis do usuário
        let usuario = {
            id,
            nome,
            email
        }

        // TODO: Criar o token
        let token = jwt.sign(usuario, "SEGREDO")

        // TODO: Retornar msg de sucesso: 200 e o token
        return res.status(200).json({token, usuario})
    }
}


module.exports = AuthController