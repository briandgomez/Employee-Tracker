const inquirer = require('inquirer');
//Redirects users
const cTable = require('console.table');
const department = require('./choices/departments');

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
                    console.log('This was selected 1');
                    break;
                case 'View all employees':
                    console.log('This was selected 2');
                    break;
                default:
                    console.log('Default');
            }
        });
}

module.exports = questions;