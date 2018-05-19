
const dbfacade = require("../facades/dbFacade");
const loginFacade = require("../facades/loginFacade")
const { DateTime } = require("@okgrow/graphql-scalars");

//Resolver map
module.exports = resolvers = {
    DateTime,
    Query: {
        getAllUsers: () => {
            return dbfacade.getAllUsers();
        },
        /* getAllLocations: () => {
            return dbfacade.getAllLocations();
        }, */
        getUserByUserName: (username) => {
            return dbfacade.getUserByUserName(username);
        },
        /* getLocationByinfo : (info) => {
            return dbfacade.getLocationByInfo(info);
        } */

    },
    Mutation: {
        addUser: (root, { input }) => {
            const newUser = new User({
                firstName: input.firstName,
                lastName: input.lastName,
                userName: input.userName,
                password: input.password,

            });

            newUser.id = newUser._id;

            return new Promise((resolve, object) => {
                newUser.save((err) => {
                    if (err) reject(err);
                    else resolve(newUser)
                })
            })
        }
    }
}