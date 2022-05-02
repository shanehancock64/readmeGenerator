// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",

  },

  {
    type: "input",
    name: "Description",
    message: "Please enter your project description",
  },

  {
    type: "list",
    name: "license",
    message: "Please select a license",
    choices: ["MIT", "apache", "none","Mozilla-Public", "GNU-General-Public", "Common-Development-and Distribution"],
  },

  {
    type: "input",
    name: "Installation",
    message: "What is need for installation?",
  },

  {
    type: "input",
    name: "Github",
    message: "What is your Github account link?"
  },

  {
    type: "input",
    name: "repo",
    message: "What is your repo link?"
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
];
inquirer 
.prompt(questions)
.then((answers) => {
  const readmeContent = markDown(answers);

  fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md')
  );
});
