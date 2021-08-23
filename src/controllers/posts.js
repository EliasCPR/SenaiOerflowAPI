module.exports ={
    index(req,res){

            const posts = [{
                author : {
                    name: "Fulano",
                },
                created_at: "10/10/2021",
                title: "esse é um post sobre JS",
                description:"js é uma linguagem de programaçõa muito top",
                image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                gist:"https://github.com.br",
                categories : [
                    "js","back-end", "express"
                ],
                coments: [
                    {
                        author:{
                            name: "Ciclano",
                        },
                        created_at:"11/10/2021",
                        description: "realmente js é muito legal"
                    }
                ]
            }];
    },

    find(req,res){

    },

    store(req,res){

    },

    update(req,res){

    },

    delete(req,res){

    }
}