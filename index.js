const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.classes");
const Engineer = require("./lib/Engineer.classes");
const Intern = require("./lib/Intern.classes");

const generateSite = require("./src/generate-html");

const teamMembers = [];

// The below sections houses the questions for each of the worker roles.
const managerQuestions = [
  {
    type: "input",
    message: "What is the managers name?",
    name: "managerName",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the managers employee ID number?",
    name: "managerId",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the managers email address?",
    name: "managerEmail",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the managers office number?",
    name: "officeNumber",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
];

// Allows user to select additional workers or end prompt.
const employeeSelection = [
  {
    type: "list",
    message: "Please select which option you would like to continue with:",
    choices: ["Add an Engineer", "Add an Intern", "finish building my team"],
    name: "menu",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineers name?",
    name: "engineerName",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the engineers employee ID number?",
    name: "engineerId",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the engineers employee email address?",
    name: "engineerEmail",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the engineers GitHub username?",
    name: "engineerGithub",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the interns name?",
    name: "internName",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the interns employee ID number?",
    name: "internId",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the interns email address?",
    name: "internEmail",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the interns school name?",
    name: "internSchool",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
];

// The below sections houses each of the call functions.
function buildTeam() {
  const fileName = "team";
  fs.writeFileSync(
    `./dist/${fileName}.html`,
    generateSite(teamMembers),
    "utf-8"
  );
}

function promptIntern() {
  inquirer.prompt(internQuestions).then(function (answers) {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    teamMembers.push(intern);
    promptMenu();
  });
}

  function promptEngineer() {
    inquirer.prompt(engineerQuestions).then(function (answers) {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      promptMenu();
    });
  }

  // Switch Case function to add additional workers or end prompt.
  function promptMenu() {
    inquirer.prompt(employeeSelection).then(function (userChoice) {
      switch (userChoice.menu) {
        case "Add an Engineer":
          promptEngineer();
          break;
        case "Add an Intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
  }

  function promptManager() {
    inquirer.prompt(managerQuestions).then(function (answers) {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
}

promptManager();
