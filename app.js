const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
  

const path = require("path");
const fs = require("fs");
const ManagerHtml = require("./templates/manager");
const EngineerHtml = require("./templates/engineer");
const InternHtml = require("./templates/intern");
const mainHtml = require("./templates/main");


let team = [];



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
        const manager = new Manager(answer.name, parseInt(answer.id), answer.email, parseInt(answer.office));
        team.push(manager);
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
         generateHtml ();
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
       const engineer = new Engineer(answer.name, parseInt(answer.id), answer.email, answer.github);
       team.push(engineer);
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
        const intern = new Intern(answer.name, parseInt(answer.id), answer.email, answer.school)     ;
        team.push(intern);
        addTeamMember();
    });
}


const generateHtml = () => { 
    let html = "";
    for (let i = 0; i < team.length; i++) {

        if (team[i].getRole() === "Manager") {
            html += ManagerHtml(team[i]);
        } else if (team[i].getRole() === "Engineer") {
            html += EngineerHtml(team[i]);
        } else if (team[i].getRole() === "Intern") {
            html += InternHtml(team[i]);
        }
    } //generating the index file, inserts the teams
    fs.writeFile("./index.html", mainHtml(html), function (err) {
        if (err) {
            
            console.log(err);
        } 
        console.log("success");
    })
}
createManager();










