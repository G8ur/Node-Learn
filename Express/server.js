const express = require("express");

const app = express(); // comaand to creeate application

app.use((req, res, next) => {
  // next is used here to allow middleware to next request and if not next() then we call response
  console.log("in the middleware");
  next(); // response in  same function and next for next function
}); // addding middleware

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>No need just a basic respone</h1>"); // with express easy no need to use write end and all
});

app.listen(3000);
