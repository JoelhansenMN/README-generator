// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = `![License Badge](https://shields.io/badge/license- ${license}-green)`;
  }

  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    Licensed under the ${license} license.`
  }
  return "";


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
    ![Description](#description)
    ![Installation](#Installation)
    ![Usage](#Usage)
    ![License](#License)
    ![Contributing](#Contributing)
    ![Tests](#Tests)
    ![Questions](#Questions)
  
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
