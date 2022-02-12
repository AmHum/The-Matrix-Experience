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

router.get('/favs/:id', (req, res) => {
    favs.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'favs_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE favs.id = vote.favs_id)'), 'vote_count']
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbfavsData => {
        if (!dbfavsData) {
          res.status(404).json({ message: 'No favs found with this id' });
          return;
        }
  
        // serialize the data
        const favs = dbfavsData.get({ plain: true });
  
        // pass data to template
        res.render('single-favs', { favs });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;