// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error) => {
error ? console.error(err) : console.log(`Your successfully at the  ${fileName}`)
    });

    
}

// TODO: Create a function to initialize app
function init() {
   
    return inquirer.prompt(questions).then((answers) => {
       console.log (answers)
       return answers
    })
    .catch((error) =>{
        console.log(error)
    })
    
        
}      


// Function call to initialize app
init();
