const siteRouter = require('./site');
const exercisesRouter = require('./exercises');
const usersRouter = require('./users');

function route(app) {
    app.use('/exercises', exercisesRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;