const express = require('express');
const router = express.Router();
const loginFacade = require("../facades/loginFacade");
const dbFacade = require("../facades/dbFacade");

/* GET users listing. */


router.post('/addLocation', async function (req, res, next) {
    const body = req.body;
    try {
        const author = await dbFacade.getUserByUserName(body.author);
        const location = await dbFacade.addLoctaionBlog(body.info, author, body.longitude, body.latitude);
        res.json(location);
    } catch (err) {
        res.status(403);
        res.json(err);
    }
})

router.post('/likeLocation', async function (req, res, next) {
    const body = req.body;
    try {
        const location = await dbFacade.getLocationByInfo(body.info);
        const user = await dbFacade.getUserByUserName(body.username);
        const like = await dbFacade.likeLocationBlog(location.id, user.id);
        res.json(like);
    } catch (err) {
        res.status(403);
        res.json(err);
    }
})

module.exports = router;
