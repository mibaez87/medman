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
    // Delete a prescription with a given id
    delete: function (req, res) {
        db.Prescription
            .remove({ _id: req.params.id })
            .then(function (dbPrescription) {
                res.json(dbPrescription);
            });
    },
    // Update the specified prescription
    update: function (req, res) {
        db.Prescription.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function (dbPrescription) {
            res.json(dbPrescription);
        });
    },
    // Find all prescriptions, sort them by next refill date, send them back to the user
    findAll: function (req, res) {
        db.Prescription
            .find(req.query)
            .sort({ nextRefill: -1 })
            .then(function (dbPrescription) {
                res.json(dbPrescription);
            });
    }
};