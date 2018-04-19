var mongoose = require('mongoose');
const dbURI = "mongodb://jonas:sikkerkode@ds249839.mlab.com:49839/miniproject_testing"
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});
