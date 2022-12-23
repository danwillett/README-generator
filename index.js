// TODO: Include packages needed for this application
const mark = require('./utils/generateMarkdown');
const fs = require('fs'); //read and write files
const inquirer = require('inquirer'); // prompts series of inputs
const { markAsUntransferable } = require('worker_threads');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Project name:',
    name: 'title',
  },  
  {
        type: 'input',
        message: 'Describe why you made this project and the problem it solves',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What steps do you need to intall your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'List any collaborators, third party assets, and/or tutorials followed',
        name: 'credits',
      },      
      {
        type: 'checkbox',
        message: 'Please choose your license (Press <space> to select, <i> to invert selection, and <return> to confirm)',
        name: 'license',
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 2-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License 2.0", "GNU General Public License 2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense", "no license"]
      },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer.prompt(
        questions
    )
    .then((answers) => {
      console.log(answers)
      // generate markdown file
      let markdownScript = mark.generateMarkdown(answers)
      console.log(markdownScript)
      writeToFile("readMeTest.md", markdownScript)
        // first steps are to call license functions
        
    })

}

// Function call to initialize app
init(questions);