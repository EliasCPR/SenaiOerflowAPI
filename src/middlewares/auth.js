const jwt =require("jsonwebtoken");
const auth = require("../config/auth");
module.exports = (req, res, next) => {
    //pegar o token no cabeçlho
    const authorization = req.headers.authorization;
    //verfificar se o token veio
    if(!authorization){
        return res.status(401).send({ error: "token não informado"})
    }

    //separar o prefixo do token
    const[prefixo,token] = authorization.split(" ");

    //verfificar se o token é valido
    try {
        //se token é valido recebemos o payload
        const payload = jwt.verify(token, auth.secret);

        //colocamos o id do usuario na requisição
        //para que o controller possa recuperar
        req.userId = payload.userId;

        return next();
    } catch (error) {
        //retornamos token invalido
        res.status(401).send({ error: "token inválido"});
    }
}