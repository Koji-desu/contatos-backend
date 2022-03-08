


module.exports = {
    index: (req, res)=>{
        res.send('Contatos')
    },
    show: (req, res)=>{
        let {id} = req.params.id
        res.send()
    },
    create: (req, res)=>{
        let {nome, email} = req.body

        let usuario = Usuario.create({
            nome, email
        })
        res.send('Contatos')
    },
    destroy: (req, res)=>{
        res.send('Contatos')
    },
    update: (req, res)=>{
        res.send('Contatos')
    },
    search: (req, res)=>{
        res.send('Contatos')
    }
}