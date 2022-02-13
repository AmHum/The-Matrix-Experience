const router = require('express').Router();
const { craft, image } = require('../models');

router.get('/:id', async (req, res) => {
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

        res.render('craft-page', {
            crafts: crafts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
