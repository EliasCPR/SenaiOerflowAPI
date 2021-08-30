const User = require("../Models/User");
const bcrypt = require("becryptjs");

module.exports = {
    async store(req, res) {
        const{name,email,password} = req.body;

        //verficar se o usuario ja existe
        let user = await User.findOne({
            where: {
                email: email
            }
        })

        if(user){
            return res.status(400).send({error: "este e-mail ja esta sendo utilizado"})
        }

        //gerar o hash da senha 
        const passwordHashed = bcrypt.hashSync(password);

        //inserir o usuario no banco
        USer.create({
            name: name,
            email: email,
            password: passwordHashed
        })

        //gerar um token 
        
        //retornar um usuario
        res.send({
            user: {
                name: user.name,
                email: user.email
            }
        });
    }
}