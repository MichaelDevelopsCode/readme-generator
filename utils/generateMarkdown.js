// list of badges for licenses
const licenseBadges = {
  Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
  Boost: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]',
  Eclipse: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]',
  IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]',
  ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
  Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]',
  Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]',
  WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]',
  Zlib: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]'
};
// list of links for licenses
const licenseLinks = {
  Apache: 'https://opensource.org/licenses/Apache-2.0',
  Boost: 'https://www.boost.org/LICENSE_1_0.txt',
  Eclipse: 'https://opensource.org/licenses/EPL-1.0',
  IBM: 'https://opensource.org/licenses/IPL-1.0',
  ISC: 'https://opensource.org/licenses/ISC',
  MIT: 'https://opensource.org/licenses/MIT',
  Mozilla: 'https://opensource.org/licenses/MPL-2.0',
  Unlicense: 'http://unlicense.org/',
  WTFPL: 'http://www.wtfpl.net/about/',
  Zlib: 'https://opensource.org/licenses/Zlib'
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return licenseBadges[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return licenseLinks[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    let licenseLink = renderLicenseLink(license);
    return `This application is covered under the license ${license}. For more info vist [${licenseLink}](${licenseLink})`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);

  return `# ${data.title} ${badge}(${licenseLink})
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  My GitHub is [${data.username}](https://github.com/${data.username}) and for any questions you can reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
