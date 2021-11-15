const db = require('../db/connection');
const questionsFile = require('../questions');

const employee = () => {
    const sql = `SELECT * FROM employee;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('\n');
        console.table(rows);
    });
}
//questionsFile.questions;
module.exports = employee;