// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseChoice = ["MIT", "apache","Mozilla-Public", "GNU-General-Public", "None"]
function renderLicenseBadge(license) {
  if (license === licenseChoice[0]){
  return '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
} else if (license === licenseChoice[1]){
  return'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
}else if (license === licenseChoice[2]){
  return'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
}else if (license === licenseChoice[3]){
  return"(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}else if (license === licenseChoice[4]){
  return'No license'}
};


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
 
  ## Table of contents 
  * [license] (#License)
  * [Description] (#description)
  * [Installation] (#Installation)
  
  ## License
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Repository
  ${data.repo}

  ## Github
  ${data.Github}

  ## Contact 
  ${data.email}

`;
}

module.exports = generateMarkdown;
