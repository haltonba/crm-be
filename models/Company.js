const mongoose = require("mongoose")

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    revenue: {
        type: Integer,
        required: true
    },
    size: {
        type: Integer,
        default: 0
    }
})

module.exports = mongoose.model("Company", CompanySchema)