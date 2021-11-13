const db = require('../db/connection');
const questions = require('../questions');
const inquirer = require('inquirer');

const add_department = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?'
        }
    ])
        .then(response => {
            //console.log(response);
            const sql = `INSERT INTO department (department_name) VALUES ('${response.name}');`;
            db.query(sql, (err, rows) => {
                if (err) throw err;
                console.table(rows);
                const sql = `SELECT * FROM department;`;
                db.query(sql, (err, rows) => {
                    if (err) throw err;
                    console.table(rows);
                });
            });
        })
}

module.exports = add_department;