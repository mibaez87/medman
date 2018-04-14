var db = require("../models");

module.exports = {
    // Create a new prescription
    create: function (req, res) {
        db.Prescription
            .create(req.body)
            .then(dbPrescription => res.json(dbPrescription))
            .catch(err => res.status(422).json(err));
    },
    // Find one prescription
    findById: function (req, res) {
        console.log(req);
        db.Prescription
            .findById(req.param.id)
            .then(dbPrescription => res.json(dbPrescription))
            .catch(err => res.status(422).json(err));
    }
};