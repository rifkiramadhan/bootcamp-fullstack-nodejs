const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Home Page"
    });
});

const UserRoutes = require('./user');
const ItemRoutes = require('./item');

router.use('/users', UserRoutes);
router.use('/items', ItemRoutes);

module.exports = router;