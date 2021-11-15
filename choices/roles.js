const db = require('../db/connection');
const questionsFile = require('../questions');

const roles = () => {
    const sql = `SELECT * FROM employee_role;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('\n');
        console.table(rows);
    });
}
//questionsFile.questions;
module.exports = roles;