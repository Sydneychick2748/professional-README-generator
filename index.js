// TODO: Include packages needed for this application
// this is for the inquirer package, the fs is for making the file system and the generateMarkdown is for making the questions 
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown");
//  Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message:"What is your project's name?",
    },
    {
      type: "input",
      name: "description",
      message:  "Please write a short description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?" 
      },
      {
        type: "input",
        name: "usage",
        message:"Provide instructions and examples for use."
      },
     
    {
      type: "list",
      name: "license",
      message: " Please  pick a  license are you going to use ?",
      choices: ["MIT", "APACHE2.0", "GPL3", "BSD3", "none"]
    },
    {
        type: "input",
        name: "contributing",
        message:"Provide guidelines if you would like people to contribute:"
      },
    
    {
      type:"input",
      name: "email",
      message: "Please enter  your email address?"
    },
    {
        type:"input",
        name: "gitHub",
        message: "Please enter  your github address?"
      },
    {
        type:"input",
        name: "test",
        message: "Please write tests for your application. Then provide examples on how to run them here:"
      },
  ];

//  Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error) => {
error ? console.error(error) : console.log(`Your successfully at the  ${fileName}`)
    });

    
}

// Create a function to generate the answers in the README  file 
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const readMeString = generateMarkdown(answers);
      writeToFile('./output/README.md', readMeString);
    })
  }
  // Function call to initialize app
  init();