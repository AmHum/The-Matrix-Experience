const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class favorite extends Model {}

favorite.init(
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favorite",
  }
);

module.exports = favorite;
