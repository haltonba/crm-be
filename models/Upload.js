const mongoose = require("mongoose")

const UploadSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    file: { 
        data: Buffer, 
        contentType: String 
    },
    opportunity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Opportunity",
        required: true
    }
})

module.exports = mongoose.model("Upload", UploadSchema)