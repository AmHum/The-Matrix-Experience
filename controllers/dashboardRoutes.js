const router = require('express').Router();
const { favorite, image } = require('../models');
const withAuth = require('../utils/withAuth');

router.get('/', withAuth, async (req, res) => {
    try {
        const favoriteData = await favorite.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: {
                exclude: [
                    'user_id',
                ],
            },
            include: {
                model: favorite,
                attributes: {
                    exclude: [
                        'craft_id',
                    ],
                },
                include: [
                    {
                        model: image,
                        limit: 1,
                        attributes: [
                            'src',
                        ],
                    },
                ],
            },
        });

        const favorites = favoriteData.map(favorite => favorite.get({ plain: true }));

        res.render('dashboard', {
            favorites: favorites,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;