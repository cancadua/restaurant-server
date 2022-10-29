const db = require("../models");
const TablesReservations = db.tablesReservations;

// Create and Save a new Book
exports.addTablesReservations = (req, res) => {
    // Validate request
    if (!(req.body.table_id && req.body.number_of_people && req.body.name && req.body.start_time)) {
        res.status(400).send({ message: "TablesReservations number and amount of seats can not be empty!" });
        return;
    }

    // Create a Book
    const tablesReservations = new TablesReservations({
        table_id: req.body.table_id,
        number_of_people: req.body.number_of_people,
        name: req.body.name,
        start_time: req.body.start_time,
        hours: req.body.hours ? req.body.hours : 2
    });

    // Save Book in the database
    tablesReservations
        .save(tablesReservations)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while adding the TablesReservations."
            });
        });
};

// Find a single Book with an id
exports.findOneTableReservation = (req, res) => {
    const id = req.params.name;

    TablesReservations.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found room reservation with name " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving room reservation with name " + id });
        });
};

// Retrieve all Books from the database.

// exports.findAllTablesReservations = (req, res) => {
//     TablesReservations.find({})
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving tablesReservations."
//             });
//         });
// };


// Update a Book by the id in the request
exports.modifyTablesReservations = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.name;

    TablesReservations.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Room Reservation with id=${id}. Maybe Room Reservation was not found!`
                });
            } else res.send({ message: "Book was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating TablesReservations with name " + id
            });
        });
};

// Delete a Book with the specified id in the request
exports.deleteTablesReservations = (req, res) => {
    const id = req.params.name;

    TablesReservations.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete room reservation with name ${id}. Maybe room reservation was not found!`
                });
            } else {
                res.send({
                    message: "Room reservation was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete room reservation with name " + id
            });
        });
};
