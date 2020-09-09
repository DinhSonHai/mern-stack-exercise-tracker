const User = require('../models/user.model');

class UserController {
    //[GET] /users
    index(req, res, next) {
        User.find({})
            .then(users => res.json(users))
            .catch(err => res.status(400).json('Error: ' + err));
    }

    //[POST] users/add
    add(req, res, next) {
        const newUser = new User(req.body);
        newUser
            .save()
            .then(() => res.json('User added'))
            .catch(err => res.status(400).json('Error: ' + err));
    }
}

module.exports = new UserController();