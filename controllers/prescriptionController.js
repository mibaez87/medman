var db = require("../models");

module.exports = {
    // Create a new prescription
    create: function (req, res) {
        db.Prescription
            .create(req.body)
            .then(function (dbPrescription) {
                res.json(dbPrescription);
            });
    },
    // Find one prescription
    findById: function (req, res) {
        db.Prescription
            .findById(req.params.id)
            .then(dbPrescription => res.json(dbPrescription))
            .catch(err => res.status(422).json(err));
    }
    // // Delete a prescription with a given id
    // delete: function (req, res) {
    //     db.Prescription
    //         .remove({ _id: req.params.id })
    //         .then(function (dbPrescription) {
    //             res.json(dbPrescription);
    //         });
    // }
};