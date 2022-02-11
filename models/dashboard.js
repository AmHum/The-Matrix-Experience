const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class dashboard extends Model { }

dashboard.init(
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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    // Favorites??
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "dashboard",
    }
);

module.exports = dashboard;