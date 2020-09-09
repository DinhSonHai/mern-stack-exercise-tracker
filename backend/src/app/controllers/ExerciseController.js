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
        
        const newExercise = new Exercise({
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

    //[GET] /exercises/:id
    getById(req, res, next) {
        Exercise.findById(req.params.id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(400).json('Error: ' + err));
    }

    //[DELETE] /exercise/:id
    deleteById(req, res, next) {
        Exercise.findByIdAndDelete(req.params.id)
            .then(() => res.json('Exercise deleted'))
            .catch(err => res.status(400).json('Error: ' + err));
    }

    //[EDIT] /exercise/edit/:id
    editById(req, res, next) {
        Exercise.findById(req.params.id)
            .then(exercise => {
                exercise.username = req.body.username,
                exercise.description = req.body.description,
                exercise.duration = Number(req.body.duration),
                exercise.date = Date(req.body.date)

                exercise.save()
                    .then(() => res.json('Exercise updated'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    }
}

module.exports = new ExerciseController();