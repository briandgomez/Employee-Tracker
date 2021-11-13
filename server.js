const express = require('express');
const db = require('./db/connection');
const questions = require('./questions');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Starts the server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.')
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});