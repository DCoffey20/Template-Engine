const inquirer = require("inquirer");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const fs = require("fs");
const cards = require("./cards");
const html = require("./generateHTML");

let myTeam = [];


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
            let newManager = new Manager(data.name, data.id, data.officeNumber, data.email);
            myTeam.push(newManager);
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
        name: "github",
        message: "Please enter the engineer's Github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address."
    }])

        .then((data) => {
            let newEngineer = new Engineer(data.name, data.id, data.github, data.email);
            myTeam.push(newEngineer);
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
        name: "school",
        message: "Please enter the intern's school."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address."
    }])

        .then((data) => {
            let newIntern = new Intern(data.name, data.id, data.school, data.email);
            myTeam.push(newIntern);
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
                let futureHTML = myTeam.map(teamMember => cards.cards(teamMember));
                futureHTML = futureHTML.toString();
                console.log(futureHTML);
                let teamPage = html.generateHTML(futureHTML);
                fs.writeFile("./output/team.html", teamPage, (err) => {
                    if (err) throw err;
                })
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

module.exports = managerQuestions;