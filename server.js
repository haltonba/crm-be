const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)

// Load Environment Variables
dotenv.config({path: "./config/config.env"})

// Connect to DB
connectDB()

// Route Files
const users = require("./routes/users")
const companies = require("./routes/companies")
const contacts = require("./routes/contacts")
const opportunities = require("./routes/opportunities")
const uploads = require("./routes/uploads")

const app = express()

app.use(express.urlencoded({ extended: true }))

// Body Parser
app.use(express.json())

// Mount Router
app.use("/api/v1/users", users)
app.use("/api/v1/companies", companies)
app.use("/api/v1/contacts", contacts)
app.use("/api/v1/opportunities", opportunities)
app.use("/api/v1/uploads", uploads)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))

