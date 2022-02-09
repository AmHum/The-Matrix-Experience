const Post = require('../models');
module.exports = {
    getAllPosts: async function(req, res) {
    const postsData = await Post.findAll({});
    res.json(postsData);

    }
};