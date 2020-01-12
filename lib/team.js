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

        .then((data) => {
            // console.log(data.name)

            teamMemberType();
        })
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

    .then((data) => {

        moreTeamMembers();
    })
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

    .then((data) => {

        moreTeamMembers();
    })
}

const moreTeamMembers = () => {
    return inquirer.prompt([{
        type: "rawlist",
        name: "moreTeamMembers",
        choices: ["Yes", "No"],
        message: "Would you like to add an engineer or and intern?"
    }])

        .then((data) => {
            console.log(data.moreTeamMembers);

            if (data.moreTeamMembers === "Yes") {
                teamMemberType();
            } else if (data.moreTeamMembers === "No") {
                console.log("Done adding team members.")
            }
        })
}

const teamMemberType = () => {
    return inquirer.prompt([{
        type: "rawlist",
        name: "teamMemberType",
        choices: ["engineer", "intern"],
        message: "Would you like to add an engineer or and intern?"
    }])

        .then((data) => {
            console.log(data.teamMemberType);

            if (data.teamMemberType === "engineer") {
                engineerQuestions();
            } else {
                internQuestions();
            }
        })
}

managerQuestions();
