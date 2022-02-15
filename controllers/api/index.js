const router = require('express').Router();

const userRoutes = require('./userRoutes');
const craftRoutes = require('./craftRoutes');

router.use('/users', userRoutes);
router.use('/craft', craftRoutes);

module.exports = router;