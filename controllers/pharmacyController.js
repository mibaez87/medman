var db = require("../models");

module.exports = {
    // Create a new pharmacy
    create: function (req, res) {
        db.Pharmacy
            .create(req.body)
            .then(function (dbPharmacy) {
                res.json(dbPharmacy);
            });
    },
    // Delete a pharmacy with a given id
    delete: function (req, res) {
        db.Pharmacy
            .remove({ _id: req.params.id })
            .then(function (dbPharmacy) {
                res.json(dbPharmacy);
            });
    },
    // Update the specified pharmacy
    update: function (req, res) {
        db.Pharmacy.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function (dbPharmacy) {
            res.json(dbPharmacy);
        });
    },
    // Find all pharmacies, sort them by next refill date, send them back to the user
    findAll: function (req, res) {
        db.Pharmacy
            .find(req.query)
            .sort({ date: -1 })
            .then(function (dbPharmacy) {
                res.json(dbPharmacy);
            });
    }
};