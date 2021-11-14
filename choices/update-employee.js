const db = require('../db/connection');
const questions = require('../questions');
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
            roleArray.push({ name: role.title, value: role.role_id });
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
                console.log(response);
                const sql = `UPDATE employee SET role_id=${response.new_role} WHERE id=${response.id};`;
                db.query(sql, (err, rows) => {
                    if (err) throw err;
                    const sql = `SELECT * FROM employee;`;
                    db.query(sql, (err, rows) => {
                        if (err) throw err;
                        console.table(rows);
                    });
                });
            })
    });

}

module.exports = update_employee;