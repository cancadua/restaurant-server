const cors = require("cors");
module.exports = app => {
    app.use(cors());

    const rooms = require("../controllers/roomController.js");
    const tables = require("../controllers/tableController.js");

    const router = require("express").Router();
    
    router.get("/rooms", rooms.findAllRooms);
    router.post("/rooms", rooms.addRoom);
    router.put("/rooms/:id", rooms.modifyRoom);
    router.delete("/rooms/:id", rooms.deleteRoom)

    router.get("/table/:id", tables.findTable);
    router.get("/tables", tables.findAllTables);
    router.get("/tables/:id", tables.findRoomTables);
    router.post("/tables", tables.addTable);
    router.put("/tables/:id", tables.modifyTable);
    router.delete("/tables/:id", tables.deleteTable)

    app.use('/api', cors(), router);
};