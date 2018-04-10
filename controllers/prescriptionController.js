var db = require("../models");

module.exports = {
    // Find all prescriptions for a specific family member, sort them by next refill date, send them back to the user
    findAll: function (req, res) {
        db.Prescription
            .find(req.query)
            .populate("prescriptions")
            .sort({ nextRefill: -1 })
            .then(function (dbPrescription) {
                res.json(dbPrescription);
            });
    },
    // Create a new prescription for a specific family member
    create: function (req, res) {
        db.Prescription
            .create(req.body)
            .then(dbPrescription => db.FamilyMember.findOneAndUpdate({ _id: req.params.id },
                { $push: { prescriptions: dbPrescription._id } },
                { new: true }))
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
    // Delete a prescription with a given id
    delete: function (req, res) {
        db.Prescription
            .remove({ _id: req.params.id })
            .then(function (dbPrescription) {
                res.json(dbPrescription);
            });
    }
};