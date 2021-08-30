const { Model, DataTypes } = require("sequelize");


class Post extends Model {

    static init(connetion) {
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                image: DataTypes.STRING,
                gist: DataTypes.STRING,
            },
            {
                sequelize: connetion,
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.User);
    }
}

module.exports = Post;