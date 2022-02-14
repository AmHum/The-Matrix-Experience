const router = require("express").Router();
const { craft, image } = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const craftData = await craft.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: image,
          limit: 1,
          attributes: ["src"],
        },
      ],
    });

    const crafts = craftData.get({ plain: true });

    res.render("single-craft", {
      crafts: crafts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
