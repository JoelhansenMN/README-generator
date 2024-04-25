// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your application:",
  },

  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project:",
  },

  {
    type: "input",
    name: "installation",
    message: "Please enter necessary information about installation of your application:",
  },

  {
    type: "input",
    name: "contributors",
    message: "Please enter information about the contributors for this project:",
  },

  {
    type: "list",
    name: "license",
    message: "Select the license associated with trehis project",
    choices: ["MIT", "Apache 2.0", "none"]
  },

  {
    type:"input",
    name: "usage",
    message: "Please state the languages or technologies associate with this project:",
  },

  {
    type: "input",
    name: "tests",
    message: "Please provide information regarding any tests utilized (if applicable)",
  },

  {
    type: "input",
    name: "email",
    message: "Please provide your email address:"
  },

  {
    type: "input",
    name: "userName",
    message: "Please provide your Github user name:"
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Create a professional README.md file...");
    writeToFile("exampleREADME.md", generateMarkdown({...responses}))
  });
}

// Function call to initialize app
init();
