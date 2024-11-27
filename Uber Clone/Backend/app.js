const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express')
const app = express()

const userRoutes = require('./routes/user.routes')

const connectToDb = require('./db/db');
connectToDb();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/users', userRoutes);

module.exports = app;