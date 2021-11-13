//Allows application exist on internet
const db = require('./db/connection');
const questions = require('./questions');

const PORT = process.env.PORT || 3001;


//Starts the server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected')
    questions();
});