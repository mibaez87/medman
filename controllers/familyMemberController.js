var db = require("../models");

module.exports = {
    // Find all family members, sort them by last name, send them back to the user
    findAll: function (req, res) {
        db.FamilyMember
            .find(req.query)
            .sort({ lastName: -1 })
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
    findOne: function (req, res) {
        db.FamilyMember
            .findOne(req.query)
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
    // Delete a family member with a given id
    delete: function (req, res) {
        db.FamilyMember
            .remove({ _id: req.params.id })
            .then(function (dbFamilyMember) {
                res.json(dbFamilyMember);
            });
    }
};