var db = require("../models");

module.exports = {
    // Create a new prescription for a specific family member
    update: function (req, res) {
        db.FamilyMember.prescriptions
            .update(req.body)
            .then(dbPrescription => db.FamilyMember.findOneAndUpdate({ _id: req.params.id },
                { $push: { prescriptions: dbPrescription } }))
            .then(function (dbPrescription) {
                res.json(dbPrescription);
            });
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