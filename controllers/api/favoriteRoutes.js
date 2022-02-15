const router = require('express').Router();
const { favorite } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newfavorite = await favorite.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newfavorite);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const favoriteData = await favorite.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!favoriteData) {
            res.status(404).json({ message: 'No favorites found with this id!' });
            return;
        }

        res.status(200).json(favoriteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;