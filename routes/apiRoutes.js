module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const familyMemberController = require("../controllers/familyMemberController.js");
	const prescriptionController = require("../controllers/prescriptionController.js");

	//add any API routes here
	router
		.route("/family")
		.post(familyMemberController.create)
		.get(familyMemberController.findAll);
	
	router
		.route("/family/:id")
		.get(familyMemberController.findById);

	router
		.route("/family/prescriptions/:id")
		.post(prescriptionController.create);

	return router;
};