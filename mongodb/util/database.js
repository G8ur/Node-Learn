const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

// connect to a databse

let  _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://dharmendragaur1970:noob@cluster0.3ju3mot.mongodb.net/shop?retryWrites=true&w=majority" // here shop is a database
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db()
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// conncetion in mongodb from cloudd

const getDb = () => {
  if(_db){
    return _db
  }
  throw "not connected"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;