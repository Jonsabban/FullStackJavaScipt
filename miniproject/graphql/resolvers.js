
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
        getUserByUserName: (root, {username}) => {
            return dbfacade.getUserByUserName(username);
        },
        /* getLocationByinfo : (info) => {
            return dbfacade.getLocationByInfo(info);
        } */

    },
    Mutation: {
        addUser: (root, { input }) => { 
            return dbfacade.addUser(
                input.firstName,
                input.lastName,
                input.userName,
                input.password);
        }
    }
}