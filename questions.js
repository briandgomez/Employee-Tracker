const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('./db/connection');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'tasks',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
}
questions();

module.exports = router;