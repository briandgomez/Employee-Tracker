const db = require('../db/connection');
const questionsFile = require('../questions');
const inquirer = require('inquirer');

const add_employee = () => {
    const sql = `SELECT * FROM employee;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        //console.log(rows);
        const employeeArray = [];
        rows.forEach(function (employee) {
            employeeArray.push({ name: employee.department_name, value: employee.id });
        });

        const managerArray = [];
        rows.forEach(function (manager) {
            managerArray.push({ name: manager.first_name, value: manager.id });
        });

        //console.log(employeeArray);
        //console.log(managerArray);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'first',
                message: 'What is their first name?'
            },
            {
                type: 'input',
                name: 'last',
                message: 'What is their last name?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is their role?',
                choices: employeeArray
            },
            {
                type: 'list',
                name: 'manager_id',
                message: 'Who is their manager?',
                choices: managerArray
            }
        ])
            .then(response => {
                //console.log(response);
                const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${response.first}', '${response.last}',${response.role}, ${response.manager_id});`;
                db.query(sql, (err, rows) => {
                    if (err) throw err;
                    const sql = `SELECT * FROM employee;`;
                    db.query(sql, (err, rows) => {
                        if (err) throw err;
                        console.log('\n');
                        console.table(rows);
                    });
                });
            })
    });

}
//questionsFile.questions;
module.exports = add_employee;