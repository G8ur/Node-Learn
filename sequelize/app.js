const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// adding middleware to access user from anywhere
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" }); // so here product belongs to user
User.hasMany(Product); //here one user has many products
User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product,{through: CartItem})  //through is used to tell sequelize where to store this conncetions
Product.belongsToMany(Cart,{through: CartItem})

sequelize
  // .sync()
  .sync({force: true})
  .then((result) => {
    // sync will create table along with all associations
    return User.findByPk(1);
    // console.log(result)  shows if the table is created
  })
  .then((user) => {
    if (!user) {
      // if user not created then we create a promise
      return User.create({ name: "Max", email: "max@gmail.com" });
    }
    return user;
  })
  .then((user) => {
    // console.log(user);
    app.listen(3000);
  })

  .catch((err) => {
    console.log(err);
  });
