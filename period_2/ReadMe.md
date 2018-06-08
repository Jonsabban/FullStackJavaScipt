# Period 2
## Node.js, Express + JavaScript Backend Testing and Express Security

### Relevant projects:
- [Mini Project](https://github.com/cph-an178/FullStack-JavaScript/tree/master/miniproject)
- [Express Exercise](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period2/Express_Exercise)

--- 
## Detailed Learning Goals:

### Why use Express?
Express is a light-weight web application frameworkto help organize your web application into an MVC architecture on the server side.

It's insanely fast (and small) server-side JavaScript web development framework built on node.js and V8 JavaScript engine.

It also has the biggest community not only out of the three frameworks compared here but out of all the web application frameworks for Node.js. It is the most matured framework out of the three, with almost 5 years of development behind it and now has StrongLoop taking control of the repository. It offers a simple way to get a server up and running and promotes code reuse with it’s built in router

### How to deploy a Node/Express application
**Nodemon**: is a utility that will monitor for any changes in your source and automatically restart your server. 

First you need to install nodemon, here we'll install it globaly

`npm install -g nodemon`

Then you'll just type `nodemon` in the terminal in your Node app folder

**Forever**: is a simple CLI tool for ensuring that a given script runs continuously (i.e. forever).

Like nodemon we'll install it globaly

`npm install forever -g`

You can use `forever` together with `nodemon` to ensure that your app allways restarts and run on your server. 

Like this

`forever start nodemon --exitcrash app.js`

Use cluster to use multicore systems(?)

### Testing REST-API in Node
See Mocha chai tests in Mini Project test folder

### Express middleware
_**Middleware**_ functions are functions that have access to the request object `(req)`, the response object `(res)`, and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.
```javascript
var app = express();

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```
