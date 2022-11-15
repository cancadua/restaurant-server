const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

const roomSchema = require("./room.js")(mongoose);
roomSchema.plugin(AutoIncrement);
db.room = mongoose.model('room', roomSchema);

const tableSchema = require("./table.js")(mongoose)
tableSchema.plugin(AutoIncrement, {id: 'table_counter'});
db.table = mongoose.model('table', tableSchema);

module.exports = db;
