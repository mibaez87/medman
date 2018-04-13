var db = require("../models");

module.exports = {
    // Find all family members, sort them by last name, send them back to the user
    findAll: function (req, res) {
        db.FamilyMember
            .find(req.query)
            .sort({ firstName: +1 })
            .then(function (dbFamilyMember) {
                res.json(dbFamilyMember);
            });
    },
    // Create a new family member
    create: function (req, res) {
        db.FamilyMember
            .create(req.body)
            .then(function (dbFamilyMember) {
                res.json(dbFamilyMember);
            });
    },
    // Find one family member
    findById: function (req, res) {
        db.FamilyMember
            .findById(req.params.id)
            .then(dbFamilyMember => res.json(dbFamilyMember))
            .catch(err => res.status(422).json(err));
    },
    // Update the specified family member
    update: function (req, res) {
        db.FamilyMember.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function (dbFamilyMember) {
            res.json(dbFamilyMember);
        });
    }
};