const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin"); // calling routes
const shopRoutes = require("./routes/shop");

const app = express();
// routes using express

app.use(bodyParser.urlencoded({extended : false})); // will parse bodies like  and will not parse non default features

app.use(adminRoutes); // using routes

app.use(shopRoutes);

app.use((req,res,next) =>{
    res.status(404).send("Page 404 not found")  // page not found staus code
})

app.listen(3000);

// instead of app.use we can use app.get and app.post
