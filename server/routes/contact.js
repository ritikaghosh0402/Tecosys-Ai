/* eslint-disable no-undef */
// Import the required modules

const express = require("express")
const router = express.Router()

const { contactUs } = require("../controller/contact")

router.post("/contactUs", contactUs)

module.exports = router