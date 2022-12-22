// TODO: Include packages needed for this application

const fs = require('fs') //read and write files
const inquirer = require('inquirer') // prompts series of inputs

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Describe why you made this project and the problem it solves',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'What steps do you need to intall your project?',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'List any collaborators, third party assets, and/or tutorials followed',
        name: 'Credits',
      },      
      {
        type: 'checkbox',
        message: 'Please choose your license (Press <space> to select, <i> to invert selection, and <return> to confirm)',
        name: 'license',
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 2-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License 2.0", "GNU General Public License 2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense", "no license"]
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
      console.log(answers)
        // need to generate markdown file
        
        // first steps are to call license functions
        
    })
    .then(()=>console.log('returned'))
}

// Function call to initialize app
init(questions);
