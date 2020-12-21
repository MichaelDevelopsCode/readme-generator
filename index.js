// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');

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
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
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
            type: 'checkbox',
            name: 'license',
            message: "What license would you like to use?",
            choices: ['', '', '', '', '', '', '']
        }, // choose from list or options (add badge at top of readme when selected)
        {
            type: 'input',
            name: 'contribution',
            message: "What are your contribution guidelines? The Contributor Covenant (https://www.contributor-covenant.org/) is an industry standard",
            default: "No contribution guidelines"
        },
        {
            type: 'input',
            name: 'tests',
            message: "How do you run tests on your project?",
            default: "No testing instrucitons"
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
        }, //added to the section of the README entitled Questions, with a link to my GitHub profile
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
        } //added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
