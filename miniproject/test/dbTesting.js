require("./testDBSetup");
const expect = require("chai").expect;
var facade = require("../facades/dbFacade")
var loginFacade = require('../facades/loginFacade.js')
var User = require("../models/user")
var Location = require("../models/locationBlog.js")
var Position = require('../models/position.js')

//clean db if used
before(async function () {
    await User.remove({});
    await Location.remove({});
    await Position.remove({});
});

describe("Testing dbFacade", function () {

    describe("Add two new Users", function () {
        it("should put 2 new users into the db", async function () {

            await facade.addUser("test", "testington", "test", "pass");
            await facade.addUser("Ficko", "Fickovic", "Ficko", "pass");

            // Get the list of all users and check if the 2 test users has been saved
            var user1 = await User.findOne({ userName: "test" }).exec();
            var user2 = await User.findOne({ userName: "Ficko" }).exec();

            await expect(user1.userName).to.be.equal("test");
            await expect(user2.userName).to.be.equal("Ficko");
        });
    });

    describe("Add job to user", function () {
        it("Should add Jobs to our 2 test users", async function () {

            // Get user test and user ficko
            var test = await User.findOne({ userName: "test" }).exec();
            var ficko = await User.findOne({ userName: "Ficko" }).exec();

            // Function which adds a job to the users
            await facade.addJobToUser(test.id, "Tester", "Test", "Test.com");
            await facade.addJobToUser(ficko.id, "Gamer", "GamingInc", "GamingInc.com");

            // assert our changes
            test = await User.findOne({ userName: "test" }).exec();
            ficko = await User.findOne({ userName: "Ficko" }).exec();

            expect(test.job[0].type).to.be.equal("Tester");
            expect(ficko.job[0].type).to.be.equal("Gamer");

        })
    });

    describe("Test AddLoctaionBlog function", function () {
        it("should add a new Location to the database", async function () {

            //since a real userId is needed I will create a new user
            await facade.addUser("Tobias", "Bacon", "Toby", "pass");
            var toby = await User.findOne({ userName: "Toby" }).exec();

            // adding the location
            await facade.addLoctaionBlog("testInfo", toby.id, 55.732530, 12.404707);

            // Fetch the location & assert its value
            const testLoc = await Location.findOne({ info: "testInfo" }).exec();

            expect(testLoc.info).to.be.equal("testInfo");
        })
    });

    describe("Test likeLocationBlog function", function () {
        it("should add a specific user to the likeArray in a specific location", async function () {

            //since a real userId & locationblogId is needed I will create a new user and location
            var userProm = await facade.addUser("Emilie", "Em", "Mulje", "pass");
            const emilie = await User.findOne({ userName: "Mulje" }).exec();
            var locProm = await facade.addLoctaionBlog("testLike", emilie.id, 55.732530, 13.404707);
            const testLoc = await Location.findOne({ info: "testLike" }).exec();

            var likeProm = await facade.likeLocationBlog(testLoc.id, emilie.id);
            await Promise.all([userProm, locProm, likeProm]);
            //assert changes
            const results = await facade.getLocationByInfo("testLike");
            expect(results.likedBy.length).to.be.equal(1);
        })
    })

    describe("Test login and find friends", function () {
        it("should add 2 users and assert that one can see the other", async function () {

           
            await facade.addUser("Alex", "stuff", "Alex", "pass");
            await facade.addUser("Mads", "stuuf", "Crimson", "pass");

            const alex = await User.findOne({ userName: "Alex" }).exec();
            const mads = await User.findOne({ userName: "Crimson" }).exec();

            const friend1 = await loginFacade("Alex", "pass", 12.403546, 55.729918, 5);
            const friend2 = await loginFacade("Crimson", "pass", 12.384299, 55.732948, 5);

            expect(friend2.length).to.be.equal(1);
        })
    })

});