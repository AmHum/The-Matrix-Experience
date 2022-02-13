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

router.get('/dashboard/:id', (req, res) => {
    dashboard.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'dashboard_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE dashboard.id = vote.dashboard_id)'), 'vote_count']
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbdashboardData => {
        if (!dbdashboardData) {
          res.status(404).json({ message: 'No dashboard found with this id' });
          return;
        }
  
        // serialize the data
        const dashboard = dbdashboardData.get({ plain: true });
  
        // pass data to template
        res.render('single-dashboard', { dashboard });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;