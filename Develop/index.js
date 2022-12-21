// TODO: Include packages needed for this application

const fs = require('fs') //read and write files
const inquirer = require('inquirer') // prompts series of inputs

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
      },
      {
        type: 'password',
        message: 'What is your password?',
        name: 'password',
      },
      {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'confirm',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer.prompt(
        questions
    )
    .then((answers) => {
        // need to generate markdown file
        // first steps are to call license functions
        
    })
    .then(()=>console.log('returned'))
}

// Function call to initialize app
init(questions);
