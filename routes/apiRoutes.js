module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const familyMemberController = require("../controllers/familyMemberController.js");

	//add any API routes here
	router.post("/", familyMemberController.create);
	router.get("/", familyMemberController.findAll);
	router.get("/:id", familyMemberController.findOne);
	router.delete("/:id", familyMemberController.delete);
	router.put("/:id", familyMemberController.update);

	return router;
};