const Exercise = require('../models/exercise.model');

class ExerciseController {
    //[GET] /excercises
    index(req, res, next) {
        Exercise.find({})
            .then(excercises => res.json(excercises))
            .catch(err => res.status(400).json('Error: ' + err));
    }

    //[POST] excercises/add
    add(req, res, next) {
        const username = req.body.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date(req.body.date);
        
        const newExcercise = new Exercise({
            username,
            description,
            duration,
            date,
        });
        newExercise
            .save()
            .then(() => res.json('Exercise added'))
            .catch(err => res.status(400).json('Error: ' + err));
    }
}

module.exports = new ExerciseController();