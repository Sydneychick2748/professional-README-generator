// this function  is returning the badges and the links to the licenses
function renderLicenseBadgeLink(license) {
  let link = "";
  if (license === "APACHE2.0") {
    link = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return link;
  } else if (license === "GPL3") {
    link = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return link;
  } else if (license === "BSD3") {
    link = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    return link;
  } else if (license === "Unlicense") {
    link = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    return link;
  } else if (license === "MIT") {
    link = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return link;
  } else {
    return link;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  const template = `
  
# ${data.title}

${renderLicenseBadgeLink(data.license)}

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
The license I used was ${data.license} license


## Contributing
If you want to contribute to the project here are the steps to do so:
${data.contributing}


## Tests
\`\`\`\`
${data.test}
\`\`\`\`


## Questions
If you have any questions about the repo, open an issue or contact me directly at: ${
    data.email
  } You can find more of my work at: ${data.gitHub}

`;

  return template;
}

module.exports = generateMarkdown;
