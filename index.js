const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager.classes');
const Engineer = require('./lib/Engineer.classes');
const Intern = require('./lib/Intern.classes');

const generateSite = require('./src/generate-html');

const teamMembers = [];

// Manager Questions
const managerQuestions = [

       {
        type: 'input',
        message: 'What is your managers name?',
        name: 'managerName',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       },  
       {
        type: 'input',
        message: 'What is the managers employee ID number?',
        name: 'managerId',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       }, 
       {
        type: 'input',
        message: 'What is the managers email?',
        name: 'managerEmail',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      }, 
      {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'officeNumber',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      },

    ];

// Employee Selection
const employeeSelection = [
      {
        type: 'list',
        message: 'Please select which option you would like to continue with:',
        name: 'menu',
        choices: ['add an engineer', 'add an intern', 'finish building my team']
      },
      
];

// Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your engineers name?',
        name: 'engineerName',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       },  
       {
        type: 'input',
        message: 'What is the engineers employee ID number?',
        name: 'engineerId',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       }, 
       {
        type: 'input',
        message: 'What is the engineers employee email?',
        name: 'engineerEmail',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      }, 
      {
        type: 'input',
        message: 'What is the engineers github?',
        name: 'engineerGithub',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      },
]

// Intern Questions
const internQuestions = [
    {
        type: 'input',
        message: 'What is your interns name?',
        name: 'internName',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       },  
       {
        type: 'input',
        message: 'What is the interns employee ID number?',
        name: 'internId',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
       }, 
       {
        type: 'input',
        message: 'What is the interns email?',
        name: 'internEmail',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      }, 
      {
        type: 'input',
        message: 'What is the interns school?',
        name: 'internSchool',
        validate: (value) => {if(value){return true} else {return 'i need a value to continue'}}
      },
]

// Build team function
function buildTeam() {
    const fileName = 'team';
    fs.writeFileSync(`./dist/${fileName}.html`, generateSite(teamMembers), 'utf-8');
}

// Intern function
function promptIntern() {
    inquirer.prompt(internQuestions)
    .then(function(answers) {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        promptMenu();
    });
}

// Engineer function
function promptEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(function(answers) {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        promptMenu();
    });
}

// Employee selection function
function promptMenu() {
    inquirer.prompt(employeeSelection)
    .then(function(userChoice) {
        switch (userChoice.menu) {
            case 'add an engineer':
                promptEngineer();
                break;
            case 'add an intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
}

// Manager function
function promptManager() {
    inquirer.prompt(managerQuestions)
    .then(function(answers) {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    });
    
}

promptManager();