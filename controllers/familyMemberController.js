var db = require("../models");

module.exports = {
    // Create a new family member
    create: function (req, res) {
        db.FamilyMember
            .create(req.body)
            .then(function (dbFamilyMember) {
                res.json(dbFamilyMember);
            });
    },
    // Delete a family member with a given id
    delete: function (req, res) {
        db.FamilyMember
            .remove({ _id: req.params.id })
            .then(function (dbFamilyMember) {
                res.json(dbFamilyMember);
            });
    },
    // Update the specified family member
    update: function (req, res) {
        db.FamilyMember.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function (dbFamilyMember) {
            res.json(dbFamilyMember);
        });
    },
    // Find all family members, sort them by next refill date, send them back to the user
    findAll: function (req, res) {
        db.FamilyMember
            .find(req.query)
            .sort({ date: -1 })
            .then(function (dbFamilyMember) {
                res.json(dbFamilyMember);
            });
    }
};