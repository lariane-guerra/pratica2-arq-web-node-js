const mongoClient = require("mongodb").MongoClient;
mongoClient
  .connect("mongodb://localhost")
  .then((conn) => (global.conn = conn.db("apimovies")))
  .catch((err) => console.log(err));

function findAll() {
  return global.conn.collection("movies").find().toArray();
}

function insert(movie) {
  return global.conn.collection("movies").insertOne(movie);
}
const ObjectId = require("mongodb").ObjectId;

function findOne(id) {
  return global.conn.collection("movies").findOne(new ObjectId(id));
}
function update(id, movie) {
  return global.conn.collection("movies").updateOne({ _id: new ObjectId(id) }, { $set: movie });
}
function deleteOne(id) {
  return global.conn.collection("movies").deleteOne({ _id: new ObjectId(id) });
}
module.exports = { findAll , insert, findOne, update, deleteOne  };
