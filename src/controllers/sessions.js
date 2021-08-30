const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = {
     async store(req, res){
         const {email,password}= req.body;

         //verficar se o usuario existe
        const user = await User.findOne({
            where: {
                email: email
            }
        });
         // verificar se a senha esta correta
         if(!user || user.password !== password)
            return res.status(403).send({error: "Usuario e/ou senha invalidos"});
         //gerar um token 
         const token =  jwt.sign({ userId: user.id}, auth.secret,{
             expiresIn:  "1h"
         });
         //enviar resposta
         res.send({
             user:{
                email: user.email,
                name: user.name
         },
         token
        })
    }
}