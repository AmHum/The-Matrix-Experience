const User = require('./User');
const dashboard = require('./dashboard');
const craft = require('./craft');
const image = require("./image")

User.hasMany(dashboard, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

dashboard.belongsTo(User, {
    foreignKey: 'user_id'
});

dashboard.belongsTo(craft, {
    foreignKey: 'craft_id'
});

craft.hasMany(dashboard, {
    foreignKey: 'craft_id',
    onDelete: 'CASCADE'
});

craft.hasMany(Image, {
    foreignKey: 'craft_id',
    onDelete: 'CASCADE'
});

Image.belongsTo(craft, {
    foreignKey: 'craft_id'
});

module.exports = { User, dashboard, craft, image };