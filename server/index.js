/* eslint-disable no-undef */

const express = require('express')
const cors = require("cors")
const paymentsRoutes = require("./routes/payments")
const contact = require('./routes/contact')
require('dotenv').config();

const port = process.env.PORT || 8080;
const app = express()
app.use(express.json())
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
		credentials: true,
    })
)

app.get('/', (req, res) => {
    res.send('Welcome to the world of AI with Tecosys!')
});

app.use("/", paymentsRoutes)
app.use('/', contact)

app.listen(port, () => console.log(`Server is running on port ${port}`))