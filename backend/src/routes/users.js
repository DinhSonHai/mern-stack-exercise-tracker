const router = require('express').Router();

const userController = require('../app/controllers/UserController');

router.get('/', userController.index);
router.post('/add', userController.add);

module.exports = router;