const User = require("./User");
const favorite = require("./favorite");
const craft = require("./craft");
const image = require("./image");

User.hasMany(favorite, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

favorite.belongsTo(User, {
  foreignKey: "user_id",
});

favorite.belongsTo(craft, {
  foreignKey: "craft_id",
});

craft.hasMany(favorite, {
  foreignKey: "craft_id",
  onDelete: "CASCADE",
});

craft.hasMany(image, {
  foreignKey: "craft_id",
  onDelete: "CASCADE",
});

image.belongsTo(craft, {
  foreignKey: "craft_id",
});

module.exports = { User, favorite, craft, image };
