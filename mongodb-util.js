"use strict";

const mongo = require("mongodb");
const ObjectID = require("mongodb").ObjectID;

var _db;
module.exports = {
  /*
   * Connects to the database
   *
   * @return callback - status message
   */
  connectToServer: function (callback) {
    mongo.connect(
      process.env.DB,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        _db = client.db("<dbname>");
        err
          ? callback({ status: false, message: err })
          : callback({
              status: true,
              message: "Successfully connected to database",
            });
      }
    );
  },

  /*
   * Returns the database object
   *
   */
  getDb: function () {
    return _db;
  },

  /*
   * Insert new book
   *
   * @param item - the book JSON object
   *
   * @return callback - status message
   */
  insertOneBook: function (item, callback) {
    item._id = new ObjectID();
    item.comments = [];
    _db.collection("books").insertOne(item, (err, result) => {
      err ? callback(err) : callback({ _id: item._id, title: item.title });
    });
  },

  /*
   * Insert new comment
   *
   * @param item - the book JSON object
   *
   * @return callback - status message
   */
  insertComment: function (item, callback) {
    if (ObjectID.isValid(item._id)) {
      _db
        .collection("books")
        .findOneAndUpdate(
          { _id: ObjectID(item._id) },
          { $push: { comments: item.comment } },
          (err, result) => {
            if (err) {
              callback(err);
            } else {
              this.findBook(item._id, (cb) => {
                callback(cb);
              });
            }
          }
        );
    } else {
      callback("Unable to find book based on " + item._id);
    }
  },

  /*
   * Find an instance of a book
   *
   * @param id - id of the book
   *
   * @return callback - status message
   */
  findBook: function (id, callback) {
    if (ObjectID.isValid(id)) {
      _db
        .collection("books")
        .find({ _id: ObjectID(id) })
        .toArray((err, result) => {
          if (err) {
            callback(err);
          } else {
            if (result[0] === undefined) {
              callback("no book found");
            } else {
              callback(result[0]);
            }
          }
        });
    } else {
      callback("invalid book id");
    }
  },

  /*
   * Return all books
   *
   * @param item - the book JSON object
   *
   * @return callback - status message
   */
  getBooks: function (query, callback) {
    _db
      .collection("books")
      .find(query)
      .toArray((err, result) => {
        if (err) {
          callback(err);
        } else {
          let r = [];
          let keys = Object.keys(result);

          keys.forEach((key) => {
            const t = result[key];
            r.push({
              _id: t._id,
              title: t.title,
              commentcount: t.comments.length,
            });
          });

          callback(r);
        }
      });
  },

  /*
   * Removes book based on id
   *
   * @param id - book id
   *
   * @return callback - status message
   */
  removeBook: function (id, callback) {
    _db.collection("books").deleteOne({ _id: ObjectID(id) }, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback("delete successful");
      }
    });
  },

  /*
   * Removes all books
   *
   * @return callback - status message
   */
  removeBooks: function (callback) {
    _db.collection("books").deleteMany({}, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback("complete delete successful");
      }
    });
  },
};
