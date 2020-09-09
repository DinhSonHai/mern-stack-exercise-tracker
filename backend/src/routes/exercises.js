const router = require('express').Router();

const exerciseController = require('../app/controllers/ExerciseController');

router.get('/', exerciseController.index);
router.post('/add', exerciseController.add);
router.get('/:id', exerciseController.getById);
router.delete('/:id', exerciseController.deleteById);
router.put('/edit/:id', exerciseController.editById);

module.exports = router;