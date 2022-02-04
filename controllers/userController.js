const User = require('../models');
module.exports = {
    getAllUsers: async function(req, res) {
    const usersData = await User.findAll({});
    res.json(usersData);

    }
};