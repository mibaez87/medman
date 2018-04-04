const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicineSchema = new Schema({
    _familyMemberId: {
        type: Schema.Types.ObjectId,
        ref: "FamilyMember",
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    dose: {
        type: String,
        trim: true,
        required: true
    },
    usedFor: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
        required: true
    },
    frequency: {
        type: String,
        trim: true,
        required: true
    },
    _pharmacyId: {
        type: Schema.Types.ObjectId,
        ref: "Pharmacy"
    },
    lastPickup: {
        type: Date,
        default: Date.now,
        required: true
    },
    refill: {
        type: Boolean,
        required: true
    },
    nextRefill: {
        type: Date,
    }
});

const Prescription = mongoose.model('Prescription', MedicineSchema);

module.exports = Prescription;