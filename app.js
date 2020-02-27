const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​const team =[];
//const OUTPUT_DIR = path.resolve(__dirname, "output")
//const outputPath = path.join(OUTPUT_DIR, "team.html");
​
//const render = require("./lib/htmlRenderer");


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

    ]).then(function(answer) {
        const manager = new Manager (answer.name, parseInt(answer.id), answer.email, parseInt(answer.office));
        team.push(manager);

        addTeamMember();
    });

}

function addTeamMember() {
    prompt.inquirer ([
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
 ]).then(function(answer){
    if(answer.type === "Engineer") {
        createEngineer();
    }
    else if (answer.type === "Intern") {
        createIntern();
    }
    else {
        render(team); 
    }
 });
}



function createEngineer(){

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
        const engineer = new Engineer(answer.name, parseInt(answer.id), answer.email, answer.github);
        team.push(engineer);
        addTeamMember();
    });
}


function createIntern () {
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
        const intern = new Intern(answer.name, parseInt(answer.id), answer.email, answer.school);
        team.push(intern);
        addTeamMember();
    });
}
createManager();