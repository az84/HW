const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const members = [];

function teamBuilder() {
  inquirer.prompt([
    {
     type: 'input',
     message: 'What is the Managers name?',
     name: 'name',
     },
    {
     type: 'input',
    message: 'What is the employee ID?',
     name: 'id',
    },
    {
    type: 'input',
    message: 'Employee email?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'Office Number?',
    name: 'officeNumber',
    }])
  .then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    members.push(answers.managerId);
    createTeam();
  })



  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
        if(userChoice.memberChoice == "add engineer"){
            console.log('engineer');
            addEngineer();
        }else if(userChoice.memberChoice == 'add intern'){
            console.log('intern')
            addIntern();
        }else{
            buildTeam()
        }
    })
   }

  
  // function addEngineer() {
  function addEngineer(){
    inquirer.prompt([
{
 type: 'input',
 message: 'What is the Engineers name?',
 name: 'name',
 },
{
 type: 'input',
message: 'What is the Engineers ID?',
 name: 'id',
},
{
type: 'input',
message: 'Engineers email?',
name: 'email',
},
{
type: 'input',
message: 'github?',
name: 'github',
}])

.then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      members.push(answers.engineerId);
      createTeam();
    });
  }


  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: answer => {
          if (answer) {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            if (members.includes(answer)) {
              return "Already taken. Please enter a different number.";
            } else {
              return true;
            }

          }
          return "Enter a number greater than zero.";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
      validate: (answer) => {
        if (answer) {
            return true
        } else { return "Please enter the name of school." }
    },
},
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      members.push(answers.internId);
      createTeam();
    });
  }

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}

teamBuilder();


