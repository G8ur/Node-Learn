const mongodb =  require('mongodb')
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      }); // adding value to collection
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      }); // finds in collection products
  }

  static findByPk(prodId) {
    const db = getDb();
    return db
      .collection("products")  // mongodb uses id in format of _id 
      .find({ _id: new mongodb.ObjectId(prodId) }) // here we need to use object id so we use mongodb objectId function 
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => { 
        console.log(err);
      });
  }
}

module.exports = Product;
