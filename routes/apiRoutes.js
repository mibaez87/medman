module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const familyMemberController = require("../controllers/familyMemberController.js");

	//add any API routes here
	router
		.route("/family")
		.get(familyMemberController.findAll)
		.post(familyMemberController.create);
	
	router
		.route("/family/:id")
		.get(familyMemberController.findOne)
		.put(familyMemberController.update)
		.delete(familyMemberController.delete);

	return router;
};