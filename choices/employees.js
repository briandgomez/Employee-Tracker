const db = require('../db/connection');
const questions = require('../questions');

const employee = () => {
    const sql = `SELECT * FROM employee;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
    });
}

module.exports = employee;