module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const familyMemberController = require("../controllers/familyMemberController.js");

	//add any API routes here
	router.post("/", familyMemberController.create);
	router.delete("/:id", familyMemberController.delete);

	return router;
};