const db = require('../db/connection');
const questionsFile = require('../questions');

const department = () => {
    const sql = `SELECT * FROM department;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('\n');
        console.table(rows);
    });
}
module.exports = department;