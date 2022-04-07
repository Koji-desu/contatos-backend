const jwt = require('jsonwebtoken')

const validaToken = (req, res, next)=>{

    // Verificando se o campo authorization existe como header
    if(req.headers.authorization == undefined){
    return res.status(400).json({msg: "requisição sem campo authorization"})
    }

    // Capturar o token ...

    let token = req.headers.authorization.replace('bearer ','')
    console.log(token)

    // Validar o token
    let usuario;
    try {
        usuario = jwt.verify(token, "SEGREDO" )
        
    } catch (error) {
        // Se inválido, return erro
        res.status(403).json({msg: error.msg})
    }
    // Se válido:
    //  - Adicionar informações do token na req
    req.usuario = usuario

    //  - passar para prox middleware ou controller... (next())
    next();

}

module.exports = validaToken