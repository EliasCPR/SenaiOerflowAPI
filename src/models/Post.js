const { Model,DataTypes } = require("sequelize");

class post extends Model{

    static init(connection){
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                image: DataTypes.STRING,
                gist: DataTypes.STRING,
            },
            {
                connection
            }
        )
    }

    static associate(){

    }
}

module.exports = Post;