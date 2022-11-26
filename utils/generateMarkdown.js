// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   const badge = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   return badge;
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license.length === "none") {
//     return '';
//   } else {
//     const link = `*[License](#license)`;
//     return link;
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template = `
  
# ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)



## Description

${data.description}




## Table of Contents (Optional)

* [Description](#Description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
 The license i used was ${data.license} license


## Contributing
If you want to contribute to the project here are the steps to do so:
${data.contributing}

## Tests
${data.test}


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email} You can find more of my work at ${data.gitHub}

`;

  return template;
}

module.exports = generateMarkdown;
