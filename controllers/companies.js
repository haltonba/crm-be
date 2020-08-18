const Company = require("../models/Company")


// @description Get all members
// @route GET /api/members
// @access Public
exports.getCompanies = async (request, response, next) => {
    try {
        const companies = await Company.find()
        response.status(200).json({success: true, count: companies.length, data: companies})
    } catch (error) {
        response.status(400).json({success: false})
    }
}

// @description Get all members
// @route GET /api/members
// @access Public
exports.getCompanies = async (request, response, next) => {
    try {
        const companies = await Company.find()
        response.status(200).json({success: true, count: companies.length, data: companies})
    } catch (error) {
        response.status(400).json({success: false})
    }
}