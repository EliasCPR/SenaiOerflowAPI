const express =  require("express");

const app = express();

app.get("/",(req,res) => {

    res.send("Helo world!!! EXPRESS");

});

app.listen(3333,() => {

    console.log("Servidor esta rodando na porta 3333");

});


