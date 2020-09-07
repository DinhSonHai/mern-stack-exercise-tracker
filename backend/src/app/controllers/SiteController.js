class SiteController {
    //[GET]
    index(req, res, next) {
        res.send('test');
    }
}

module.exports = new SiteController();