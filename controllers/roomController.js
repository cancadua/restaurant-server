const db = require("../models");
const AutoIncrement = require("../models");
const Room = db.room;

// Create and Save a new Room
exports.addRoom = (req, res) => {

    const room = new Room();

    room.save(room)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while adding the Room."
            });
        });
};


// Retrieve all Rooms from the database.
exports.findAllRooms = (req, res) => {
    Room.find({}).select('-__v')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving rooms."
            });
        });
};

exports.findRoom = (req, res) => {
    console.log(req.params.id)
    Room.find({ room_id: req.params.id })
        .then(data => {
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books."
            });
        });
};


// Update a Room by the id in the request
exports.modifyRoom = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Room.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Room with id=${id}. Maybe Room was not found!`
                });
            } else res.send({ message: "Room was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Room with id=" + id
            });
        });
};

// Delete a Room with the specified id in the request
exports.deleteRoom = (req, res) => {
    const id = req.params.id;

    Room.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Room with id=${id}. Maybe Room was not found!`
                });
            } else {
                res.send({
                    message: "Room was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Room with id=" + id
            });
        });
};
