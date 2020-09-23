/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var mongoDbUtilities = require("./../mongodb-util");

module.exports = function (app) {
  app
    .route("/api/books")
    .get(function (req, res) {
      mongoDbUtilities.connectToServer((state) => {
        if (state.status) {
          mongoDbUtilities.getBooks({}, (callback) => {
            res.json(callback);
          });
        } else {
          return res.send("unable to connect to database");
        }
      });
    })

    // Insert new book
    .post(function (req, res) {
      const title = req.body.title;

      if (title === undefined || title.length === 0) {
        return res.send("no title given");
      } else {
        mongoDbUtilities.connectToServer((state) => {
          if (state.status) {
            mongoDbUtilities.insertOneBook({ title: title }, (callback) => {
              return res.json(callback);
            });
          } else {
            return res.send("unable to connect to database");
          }
        });
      }
    })

    .delete(function (req, res) {
      mongoDbUtilities.connectToServer((state) => {
        if (state.status) {
          mongoDbUtilities.removeBooks((callback) => {
            return res.json(callback);
          });
        } else {
          return res.send("unable to connect to database");
        }
      });
    });

  app
    .route("/api/books/:id")
    .get(function (req, res) {
      console.log("/api/books/:id GET");
      var bookid = req.params.id;
      mongoDbUtilities.connectToServer((state) => {
        if (state.status) {
          mongoDbUtilities.findBook(bookid, (callback) => {
            return res.json(callback);
          });
        } else {
          return res.send("unable to connect to database");
        }
      });
    })

    .post(function (req, res) {
      console.log("/api/books/:id POST");
      var bookid = req.params.id;
      var comment = req.body.comment;

      if (comment === undefined || comment.length === 0) {
        return res.send("no comment entered");
      } else {
        mongoDbUtilities.connectToServer((state) => {
          if (state.status) {
            mongoDbUtilities.insertComment(
              { _id: bookid, comment: comment },
              (callback) => {
                return res.json(callback);
              }
            );
          } else {
            return res.send("unable to connect to database");
          }
        });
      }
      //json res format same as .get
    })

    .delete(function (req, res) {
      var bookid = req.params.id;
      console.log("/api/books/:id DELETE");
      mongoDbUtilities.connectToServer((state) => {
        if (state.status) {
          mongoDbUtilities.removeBook(bookid, (callback) => {
            return res.json(callback);
          });
        } else {
          return res.send("unable to connect to database");
        }
      });
    });
};
