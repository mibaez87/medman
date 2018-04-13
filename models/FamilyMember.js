const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    prescriptions: [{ type: Schema.ObjectId, ref: "Prescription" }]
});

const FamilyMember = mongoose.model("FamilyMember", MemberSchema);

module.exports = FamilyMember;