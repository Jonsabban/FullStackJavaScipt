var express = require('express');
var router = express.Router();
const dbFacade = require('../facades/dbFacade');
const loginFacade = require('../facades/loginFacade')

router.post('/login', async function (req, res) {
  const body = req.body;
  const o = {
    username: body.username,
    password: body.password,
    longitude: body.longitude,
    latitude: body.latitude,
    distance: body.distance
  }
  try {
    friendlist = await loginFacade(o.username, o.password, o.longitude, o.latitude, o.distance);
    res.json(friendlist)
  } catch (err) {
    res.status(403);
    res.json(err);
  }
})

router.post('/adduser', async function (req, res, next) {
  const body = req.body;
  console.log(body);
  try {
    const newUser = await dbFacade.addUser(body.firstName, body.lastName, body.userName, body.password)
    res.json(newUser);
  } catch (err) {
    res.status(403);
    res.json(err);
  }
});

router.get('/getAllUsers', async function (req, res, next) {
  try {
    let users = await dbFacade.getAllUsers();
    res.json(users)
  } catch (err) {
    res.status(403);
    res.json(err);
  }
});

router.post('/getUserByName', async function (req, res, next) {
  const body = req.body;
  try {
    let user = await dbFacade.getUserByUserName(body.userName);
    res.json(user)
  } catch (err) {
    res.status(403);
    res.json(err)
  }
});

module.exports = router;
