const tables = require("../controllers/tableController");
const rooms = require("../controllers/roomController");
module.exports = app => {

    const rooms = require("../controllers/roomController.js");
    const tables = require("../controllers/tableController.js");
    const roomsReservations = require("../controllers/roomsReservationsController.js");
    const tablesReservations = require("../controllers/tablesReservationsController.js");

    const router = require("express").Router();

    router.get("/rooms", rooms.findAllRooms);
    router.post("/rooms", rooms.addRoom);
    router.put("/rooms/:id", rooms.modifyRoom);
    router.delete("/rooms/:id", rooms.deleteRoom)

    router.get("/tables", tables.findAllTables);
    router.get("/tables/:id", tables.findRoomTables);
    router.post("/tables", tables.addTable);
    router.put("/tables/:id", tables.modifyTable);
    router.delete("/tables/:id", tables.deleteTable)

    app.use('/api', router);
};