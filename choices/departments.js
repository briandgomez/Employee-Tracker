const db = require('../db/connection');

const department = () => {
    const sql = `SELECT * FROM department;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
    });
}


module.exports = department;