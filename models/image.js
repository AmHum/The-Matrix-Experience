const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class image extends Model { }

image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        craft_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "craft",
                key: "id",
            },
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "image",
    }
);

module.exports = image;