const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PharmSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    }
});

const Pharmacy = mongoose.model('Pharmacy', PharmSchema);

module.exports = Pharmacy;