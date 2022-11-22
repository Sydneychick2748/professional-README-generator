// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badge = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) {
    return "";
  } else {
    const link = `* [License](#license) `;
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template= `
# ${data.title}

## Description

${data.description}



## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Usage](#usage)
* ${link}



## Installation

${data.installation}


## Usage

${data.usage}



## Licenses

This project is under the ${data.license}
${badge}

##Features
if your project has a lot of features list them here 

## How to Contribute
if you would like others to contribute you can include the guidelines of how to do so 

## Tests

Go the extra mile and write test for your application . Then provide examples of how to run them 

## Questions

if you have any questions , contact me by ${data.email}

`;

return template;
}

module.exports = generateMarkdown;
