const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");

//const fs = require("fs");
//const OUTPUT_DIR = path.resolve(__dirname, "output")
//const outputPath = path.join(OUTPUT_DIR, "team.html");

let team = {
    manager: undefined,
    intern: [],
    engineer: []
}

function createManager() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your manager's office number?"
        },

    ]).then(function (answer) {
        team.manager = new Manager(answer.name, parseInt(answer.id), answer.email, parseInt(answer.office));
        addTeamMember();
    });

}

function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(function (answer) {
        if (answer.type === "Engineer") {
            createEngineer();
        }
        if (answer.type === "Intern") {
            createIntern();
        }
        if (answer.type=== "I don't want to add any more team members"){
         render(team);
        }
    });
}



function createEngineer() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github?"
        }

    ]).then(function (answer) {
        team.engineer.push(new Engineer(answer.name, parseInt(answer.id), answer.email, answer.github));
        addTeamMember();
    });
}


function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }

    ]).then(function (answer) {
        team.intern.push(new Intern(answer.name, parseInt(answer.id), answer.email, answer.school));
        addTeamMember();
    });
}
createManager();

