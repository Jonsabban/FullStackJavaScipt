var User = require("../models/user");
var mongoose = require('mongoose');
var LocationBlog = require("../models/locationBlog");
var Position = require("../models/position");

var addUser = function (firstName, lastName, userName, password) {
    var userDetail = { firstName, lastName, userName, password };
    var user = new User(userDetail);
    return user.save();
}
var addJobToUser = async function (userId, type, company, companyUrl) {
    let job = { type, company, companyUrl };
    try {

        const user = await User.findById(userId).exec();
        user.job.push(job)
        return user.save();
    }
    catch (err) {
        console.log(err)
    };
}
var addLoctaionBlog = function (info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save();
}
var likeLocationBlog = async function (locId, userId) {
    try {
        const loc = await LocationBlog.findById(locId).exec();
        loc.likedBy.push(userId);
        return loc.save();
    }
    catch (err) {
        console.log(err)
    };
};

var getAllUsers = function () {
    return User.find({}).exec();
}

var getAllLocations = function () {
    return Location.find({}).exec();
}

var getUserByUserName = function (username) {
    return User.findOne({ userName: username }).exec();
}

var getLocationByInfo = function (info) {
    return LocationBlog.findOne({ info: info }).exec();
}

module.exports = {
    addUser: addUser,
    addJobToUser: addJobToUser,
    addLoctaionBlog: addLoctaionBlog,
    likeLocationBlog: likeLocationBlog,
    getAllUsers: getAllUsers,
    getUserByUserName: getUserByUserName,
    getLocationByInfo: getLocationByInfo
}