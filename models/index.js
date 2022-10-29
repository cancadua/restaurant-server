const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.book = require("./book.js")(mongoose);
db.room = require("./room.js")(mongoose)
db.roomsReservations = require("./roomsReservations.js")(mongoose)
db.table = require("./table.js")(mongoose)
db.tablesReservations = require("./tablesReservations.js")(mongoose)

module.exports = db;
