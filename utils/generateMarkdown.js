// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

  // select correct license link for the selected license


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  switch(data.license) {
    case "MIT":
      data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      data.license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "none":
      data.license = "";
      break;
    default:
      console.log("invalid Selection")
      break;
  }
  
  
  return `# ${data.title} ${data.license}

  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)
  
  ## Description
    ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
    ${data.contributors}

  ## Tests
    ${data.tests}

  ## Questions:
  Email:${data.email}
  
  [Github](https://www.github.com/${data.userName})
`;
}

module.exports = generateMarkdown;
