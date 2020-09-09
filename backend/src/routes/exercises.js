const router = require('express').Router();

const exerciseController = require('../app/controllers/ExerciseController');

router.get('/', exerciseController.index);
router.post('/add', exerciseController.add);

module.exports = router;