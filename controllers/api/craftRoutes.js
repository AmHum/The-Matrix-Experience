const router = require('express').Router();
const { craft } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const crafts = await craft.findAll();
        const craftData = crafts.map(item => item.get({ plain: true }));

        res.status(200).json(craftData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newcraft = await craft.create({
            ...req.body,
        });

        res.status(200).json(newcraft);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const craftData = await craft.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!craftData) {
            res.status(404).json({ message: 'No crafts found with this id!' });
            return;
        }

        res.status(200).json(craftData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;