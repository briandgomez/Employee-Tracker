const db = require('../db/connection');
const questions = require('../questions');

const roles = () => {
    const sql = `SELECT * FROM employee_role;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
    });
}

module.exports = roles;