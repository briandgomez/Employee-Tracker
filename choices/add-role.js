const db = require('../db/connection');
const questions = require('../questions');
const inquirer = require('inquirer');

const depOpt = () => {
    const sql = `SELECT * FROM department;`;
    return db.query(sql, (err, rows) => {
        if (err) throw err;
        return rows;
    });
}

const add_role = () => {
    //console.log(depOpt());
    const sql = `SELECT * FROM department;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        const depArray = [];
        console.log(rows);
        rows.forEach(function(department){
            depArray.push({name: department.department_name, value: department.id});
        });
        return inquirer.prompt([
            {
                type: 'input',
                name: 'role_name',
                message: 'What is the role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary?'
            },
            {
                type: 'list',
                name: 'dep_role',
                message: 'What department does the role belong to?',
                choices: depArray
            }
        ])
            .then(response => {
                //console.log(response);
                const sql = `INSERT INTO  employee_role(title, salary,department_id) VALUES ('${response.role_name}', '${response.salary}','${response.dep_role}');`;
                db.query(sql, (err, rows) => {
                    if (err) throw err;
                    const sql = `SELECT * FROM employee_role;`;
                    db.query(sql, (err, rows) => {
                        if (err) throw err;
                        console.table(rows);
                    });
                });
            })
    });

}

module.exports = add_role;