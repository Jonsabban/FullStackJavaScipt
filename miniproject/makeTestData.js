require("./dbSetup.js");

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
  var job = [{ type, company, companyUrl }, { type, company, companyUrl }];
  var userDetail = { firstName, lastName, userName, password, job };
  console.log("sldfjaslkjflska")
  var user = new User(userDetail);
  return user.save();
}

function positionCreator(lon, lat, userId, keep) {
  var posDetail = { user: userId, loc: { coordinates: [lon, lat] } };
  if (keep) {
    posDetail.created = "2022-09-25T20:40:21.899Z" 
  }
  var position = new Position(posDetail);
  return position.save();
}

function LocationBlogCreator(info, author, longitude, latitude) {
  var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
  var blog = new LocationBlog(LocationBlogDetail);
  return blog.save()
}

async function createUser() {
  await User.remove({});
  await Position.remove({});
  await LocationBlog.remove({});

  var userPromises = [
    userCreate("Mads", "J", "AmazingMaze", "pass", "xxx", "comp", "comp.url"),
    userCreate("Filip", "Fickovic", "Ficko", "pass", "xxx2", "comp2", "comp.url2"),
    userCreate("Tobias", "b3", "Toby", "Toby", "pass", "comp3", "comp.url3"),
    userCreate("Emilie", "b4", "Mulje", "Mulje", "pass", "comp4", "comp.url4"),
    userCreate("Jocke", "b5", "Crowley", "pass", "xxx5", "comp5", "comp.url5")
  ]
  var users = await Promise.all(userPromises);

  var posPromises = [
    positionCreator(12.409744262695312, 55.727883425773065, users[0]._id, true),
    positionCreator(12.64251708984375, 55.6307094465468, users[1]._id, true),
    positionCreator(12.4749755859375, 55.653572845133326, users[2]._id, true),
    positionCreator( 12.476692199707031, 55.71028613431717, users[3]._id, true)
  ]
  var pos = await Promise.all(posPromises);

  var blogPromises = [
    LocationBlogCreator("Cool Place", users[0]._id, 26, 148),
    LocationBlogCreator("Decent Place", users[0]._id, 56, 56),
    LocationBlogCreator("Alright Place", users[0]._id, 126, 248),
    LocationBlogCreator("Pretty fucking great Place", users[3]._id, 1337, 420),
  ]
  var blogs = await Promise.all(blogPromises);

  //console.log(userPromises);
  //console.log(posPromises);
  console.log(blogPromises);
}

createUser();
