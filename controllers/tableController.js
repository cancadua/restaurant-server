const db = require("../models");
const Table = db.table;

exports.addTable = (req, res) => {
    if (!(req.body.room_id && req.body.max_seats)) {
        res.status(400).send({ message: "Table number and amount of seats can not be empty!" });
        return;
    }

    const table = new Table({
        room_id: req.body.room_id,
        max_seats: req.body.max_seats
    });

    table.save(table)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while adding the Table."
            });
        });
};


exports.findTable = (req, res) => {
    Table.find({ _id: req.params.id })
        .then(data => {
            res.send(data[0]);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books."
            });
        });
};

// Find all published Books
exports.findRoomTables = (req, res) => {
    Table.find({ room_id: req.params.id })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books."
            });
        });
};

// Retrieve all Tables from the database.
exports.findAllTables = (req, res) => {
    Table.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tables."
            });
        });
};


// Update a Table by the id in the request
exports.modifyTable = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;

    Table.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Table with id=${id}. Maybe Table was not found!`
                });
            } else res.send({ message: "Table was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Table with id=" + id
            });
        });
};

// Delete a Table with the specified id in the request
exports.deleteTable = (req, res) => {
    const id = req.params.id;

    Table.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Table with id=${id}. Maybe Table was not found!`
                });
            } else {
                res.send({
                    message: "Table was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Table with id=" + id
            });
        });
};
