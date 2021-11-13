const inquirer = require('inquirer');
const cTable = require('console.table');
const department = require('./choices/departments');
const roles = require('./choices/roles');
const employee = require('./choices/employees');
const add_department = require('./choices/add-department');
const add_role = require('./choices/add-role');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'tasks',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
        .then(response => {
            //console.log(response)
            switch (response.tasks) {
                case 'View all departments':
                    department();
                    break;
                case 'View all roles':
                    roles();
                    break;
                case 'View all employees':
                    employee();
                    break;
                case 'Add a department':
                    add_department();
                    break;
                case 'Add a role':
                    add_role();
                    break;
                default:
                    console.log('Default');
            }
        });
}

module.exports = questions;