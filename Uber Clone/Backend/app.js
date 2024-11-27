const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express')

dotenv.config();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = app;