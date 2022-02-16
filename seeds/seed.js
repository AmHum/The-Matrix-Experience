const sequelize = require("../config/connection");
const { User, favorite, craft, image } = require("../models");

const userData = require("./userData.json");
const craftData = require("./craftData.json");
const favoriteData = require("./favoriteData.json");
const imageData = require("./imageData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);
  const crafts = await craft.bulkCreate(craftData);
  const favorites = await favorite.bulkCreate(favoriteData);
  const images = await image.bulkCreate(imageData);

  process.exit(0);
};

seedDatabase();
