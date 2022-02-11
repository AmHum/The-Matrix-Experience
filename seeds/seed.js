const sequelize = require('../config/connection');
const { User, dashboard, craft, image } = require('../models');

const userData = require('./userData.json');
const craftData = require('./craftData.json');
//const dashboardData = require('./dashboardata.json');
const imageData = require('./imageData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData);
    const crafts = await craft.bulkCreate(craftData);
    //const dashboard = await dashboardbulkCreate(dashboardData);
    const images = await image.bulkCreate(imageData);

    process.exit(0);
};

seedDatabase();