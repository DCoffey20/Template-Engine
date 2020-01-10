const inquirer = require("inquirer");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Inter = require("./intern");

const managerQuestions = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Please enter the manager's name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the manager's employee id number."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address."
    }])
}

const engineerQuestions = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Please enter the engineer's name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's employee id number."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the engineer's Github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address."
    }])
}

const internQuestions = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Please enter the intern's name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's employee id number."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the intern's school."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address."
    }])
}

managerQuestions();