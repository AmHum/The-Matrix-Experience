const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require("./api/");
const craftRoutes = require('./craftRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/craft', craftRoutes);


module.exports = router;