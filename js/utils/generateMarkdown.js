// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  console.log(license[0])
  let badge;
  let link;
  const apache = "Apache License 2.0"
  const gnu = "GNU General Public License v3.0"
  const mit = "MIT License"
  const bsd2 = "BSD 2-Clause 'Simplified' License"
  const bsd3 = "BSD 2-Clause 'New' or 'Revised' License"
  const boost = "Boost Software License 1.0"
  const creative = "Creative Commons Zero v1.0 Universal"
  const eclipse = "Eclipse Public License 2.0"
  const gnuAffero = "GNU Affero General Public License 2.0"
  const gnuGeneral = "GNU General Public License 2.0"
  const gnuLesser = "GNU Lesser General Public License v2.1"
  const mozilla = "Mozilla Public License 2.0"
  const unlicense = "The Unlicense"
  
  switch (license[0]) {
    
    case apache:
      
      badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      link = "https://opensource.org/licenses/Apache-2.0"
      break;

    case gnu:
      badge = "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
      link = "https://www.gnu.org/licenses/gpl-3.0"
      break;

    case mit:
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      link = "https://opensource.org/licenses/MIT";
      break;

    case bsd2:
      badge = "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)"
      link = "https://opensource.org/licenses/BSD-2-Clause";
      break;

    case bsd3:
      badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case boost:
      badge = "![License](https://img.shields.io/badge/License-Boost_1.0-88c1cf?style=for-the-badge)"
      link = "https://www.boost.org/users/license.html"
      break;

    case creative:
      badge = "![License](https://img.shields.io/badge/License-CC_BY-EF9421.svg?style=for-the-badge)"
      link = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
      break;

    case eclipse:
      badge = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
      link = "https://opensource.org/licenses/EPL-2.0";
      break;

    case gnuAffero:
      badge = "![License](https://img.shields.io/badge/License-AGPL_3-blue.svg?style=for-the-badge)";
      link = "https://www.gnu.org/licenses/agpl-3.0.en.html"
      break;

    case gnuGeneral:
      badge = "![License](https://img.shields.io/badge/License-GPL_2-blue.svg?style=for-the-badge)";
      link = "https://de.opensuse.org/GNU_General_Public_License"
      break;

    case gnuLesser:
      badge = "![License](https://img.shields.io/badge/License-LGPL_3-blue.svg?style=for-the-badge)";
      link = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html"

    case mozilla:
      badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
      link = "https://opensource.org/licenses/MPL-2.0";
      break;

    case unlicense:
      badge = "![License](https://img.shields.io/badge/License-Unlicense-808080.svg?style=for-the-badge)"
      link = "https://unlicense.org/"
      break;

    default:
      badge = "";
      link = "";
      break;

  }

  return `
  ${badge} \n \n
  ${link}
  `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("hi")
  let licenseSection = renderLicenseBadge(data.license);
  console.log(licenseSection)
  
  return `# ${data.title} \n
  
  ## Description \n 
  ${data.description} \n

  ## Table of Contents \n
  - [Installation](#installation) \n
- [Usage](#usage) \n
- [Credits](#credits) \n
- [License](#license) \n \n

## Installation \n
${data.installation} \n

## Usage \n
${data.usage} \n


## License \n
${licenseSection} \n

## Contributing \n
${data.contributing} \n

## Tests \n
${data.tests} \n

## Questions \n
${data.questions} \n
`;
}

module.exports = {generateMarkdown, renderLicenseBadge}
