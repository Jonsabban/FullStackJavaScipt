const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const typeDefs = `
type Job {
  type: String
  company: String
  companyUrl : String
}
scalar DateTime

type User {
  _id: ID
  firstName: String
  lastName: String
  userName : String
  job: [Job]
  created : DateTime
  lastUpdated : DateTime
}

input userInput {
  firstName : String
  lastName : String
  userName : String
  password : String
}

type Query {
  getAllUsers : [User]
  getUserByUserName(username: String) : User
}

type Mutation {
  addUser(input: userInput) : User
}

`
/* type LocationBlog {
  info: String, required: true
  img: String
  pos : {
    longitude : Number, required
    latitude : type:Number, required
  },
  author: [User]
  likedBy: [User]
  created:  DateTime, default: Date.now},
  lastUpdated: DateTime 
}
  getAllLocaitons : [LocaitonBlog]


 */

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };