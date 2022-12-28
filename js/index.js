// install packages needed for application
const mark = require('./utils/generateMarkdown');
const fs = require('fs'); //read and write files
const inquirer = require('inquirer'); // prompts series of inputs
const { markAsUntransferable } = require('worker_threads');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Project name:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Github Username:',
    name: 'username',
  },
  {
    type: 'input',
    message: 'email:',
    name: 'email',
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
    type: 'checkbox',
    message: 'Please choose your license (Press <space> to select, <i> to invert selection, and <return> to confirm)',
    name: 'license',
    choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 2-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License 2.0", "GNU General Public License 2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense", "no license"]
  },
  {
    type: 'input',
    message: 'List any collaborators, third party assets, and/or tutorials followed',
    name: 'credits',
  },
  {
    type: 'input',
    message: 'Provide any instructions for how to contribute to this project',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Provide instructions on how to run all necessary tests (with libraries and commands)',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Provide instructions for how users should reach out with additional questions',
    name: 'questions',
  },
];

// function writes README file with user input data
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

function makeReadme(answers) {
  let markdownScript = mark.generateMarkdown(answers)
  console.log(markdownScript)
  writeToFile("README.md", markdownScript)
}
// generate markdown file


// function initializes app by prompting questions using inquirer package
function init(questions) {
  inquirer.prompt(
    questions
  )
    .then((answers) => {
      console.log(answers)
      const githubLink = `https://api.github.com/users/${answers.username}`

      fetch(githubLink)
        .then(function (response) {
          return response.json()
        })
        .then(function (results) {
          if (results.html_url != undefined) {
            answers.github = results.html_url
          }
          else {
            console.error("Unrecognized github user - Please edit Questions section of README.md with correct info.")
            answers.github = '';
          }

          makeReadme(answers)

        })
        .catch(function () {
          console.error("Couldn't connect to gihub server, Question section is incomplete.")
          answers.github = '';
          makeReadme(answers)

        })
    })

}

// Function call to initialize app
init(questions);
