const mongoose = require("mongoose");
const User = require("../models/user");
const Position = require("../models/position");



var login = async function (username, password, longitude, latitude, distance) {
    //super secret hashing technique:
    const secret = "jdfklsajfldkasj"
    const user = await User.findOne({ userName: username, password: secret + password }).exec();
    if (user === null) {
        throw { msg: "Wrong username or password", status: 403 };
    }
    const loc = {
        type: "Point",
        coordinates: [longitude, latitude],
    }
    const pos = await Position.findOneAndUpdate({ user: user._id },
        { loc: loc }, { upsert: true }).exec();

    let friends = await findFriends(user, loc, distance * 1000);
    return friends;
}

var findFriends = function (user, point, distance) {
    return Position.find(
        {
            user: {
                $ne: user.id
            },
            loc: {
                $near: {
                    $geometry: point,
                    $maxDistance: distance,
                }
            }
        }
    )
}

module.exports = login;