const router = require('express').Router();
const { craft, image } = require('../models');

router.get('/', async (req, res) => {
    try {
        const craftData = await craft.findAll({
            include: [
                {
                    model: image,
                    limit: 1,
                    attributes: [
                        'src',
                    ],
                },
            ],
        });

        const crafts = craftData.map(craft => craft.get({ plain: true }));

        res.render('home', {
            crafts: crafts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');

            return;
        }

        res.render('login', {
            pageTitle: 'Welcome to The Matrix | Login',
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;