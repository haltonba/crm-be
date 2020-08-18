const mongoose = require("mongoose")

const OpportunitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactList: {
        type: String,
        required: true
    },
    closeDate: {
        type: Integer,
        required: true
    },
    amount: {
        type: Integer,
        default: 0
    },
    stage: {
        type: Integer,
        default: 0
    },
    notes: {
        type: Integer,
        default: 0
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Opportunity", OpportunitySchema)