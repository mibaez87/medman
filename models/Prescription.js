const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicineSchema = new Schema({
    medicineName: {
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