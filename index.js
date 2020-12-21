// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); // allows app to access the fs module's functions through the fs assignment
const generateMarkdown = require('./utils/generateMarkdown'); // grab function from generateMarkdown.js

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What's your project title?",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a project title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Give a project description",
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project?",
            default: "No installation steps"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for use.",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: "What license would you like to use?",
            choices: ['Apache','Boost','Eclipse','IBM','ISC','MIT','Mozilla','Unlicense','WTFPL','Zlib'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: "What are your contribution guidelines? The Contributor Covenant (https://www.contributor-covenant.org/) is an industry standard",
            default: "No contributing guidelines"
        },
        {
            type: 'input',
            name: 'tests',
            message: "How do you run tests on your project?",
            default: "No testing instructions"
        },
        {
            type: 'input',
            name: 'username',
            message: "What's your GitHub username?",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
  
        console.log('README complete! Check out README.md to see the result!');
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(answers => { 
            let data = generateMarkdown(answers);
            writeToFile('./README.md', data);
        });
}

// Function call to initialize app
init();
