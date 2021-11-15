const db = require('../db/connection');
const questionsFile = require('../questions');
const inquirer = require('inquirer');

const update_employee = () => {
    const sql = `SELECT * FROM employee;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        const employeeArray = [];
        //console.log(rows);
        rows.forEach(function (employee) {
            employeeArray.push({ name: employee.first_name, value: employee.id });
        });
        const roleArray = [];
        rows.forEach(function (role) {
            roleArray.push({ name: role.title, value: { role_id: role.role_id, title: role.title, dep_name: role.department_name } });
        });
        return inquirer.prompt([
            {
                type: 'list',
                name: 'id',
                message: 'What is their name?',
                choices: employeeArray
            },
            {
                type: 'list',
                name: 'new_role',
                message: 'What is their new role?',
                choices: roleArray
            }
        ])
            .then(response => {
                //console.log(response);
                const sql = `UPDATE employee SET role_id=${response.new_role.role_id}, title='${response.new_role.title}', department_name='${response.new_role.dep_name}' WHERE id=${response.id};`;
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
module.exports = update_employee;