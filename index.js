// this is for the inquirer package, the fs is for making the file system and the generateMarkdown is for making the questions
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
//  Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid project name?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter a valid description of your project:");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid steps required to install your project? ");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples on how to use the project.",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter valid instructions and for use");
        return false;
      }
    },
  },

  {
    type: "list",
    name: "license",
    message: " Please  pick a  license are you going to use ?",
    choices: ["MIT", "APACHE2.0", "GPL3", "BSD3", "Unlicense"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide guidelines if you would like people to contribute:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide valid guidelines if you would like people to contribute:");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "Please enter  your email address?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log( "Please provided a valid  email address?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "gitHub",
    message: "Please enter  your github address?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log( "Please provided a valid  gitHub address?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message:
      "Please write tests for your application. Then provide examples on how to run them here:",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please provide valid test for your application");
          return false;
        }
      },
  },
];

//  Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error
      ? console.error(error)
      : console.log(`Your successfully at the  ${fileName}`);
  });
}

// Create a function to generate the answers in the README  file
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMeString = generateMarkdown(answers);
    writeToFile("./output/README.md", readMeString);
  });
}
// Function call to initialize app
init();
