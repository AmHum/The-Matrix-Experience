const router = require("express").Router();
const { favorite, craft, image } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const favoriteData = await favorite.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
      include: {
        model: craft,
        include: [
          {
            model: image,
            attributes: ["src"],
          },
        ],
      },
    });

    const favorites = favoriteData.map((favorite) =>
      favorite.get({ plain: true })
    );

    res.render("dashboard", {
      favorites: favorites,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
