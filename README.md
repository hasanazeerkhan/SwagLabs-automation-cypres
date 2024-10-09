# Swag Labs Automation with Cypress

This repository contains automated tests for the Swag Labs application using Cypress. The goal is to ensure the functionality and reliability of the application through automated end-to-end testing.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Custom Commands](#custom-commands)
- [Test Cases Covered](#test-cases-covered)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Swag Labs is a web application that simulates a shopping experience. This project automates various features of the Swag Labs application to validate user flows and ensure seamless functionality.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or later)
- npm (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hasanazeerkhan/swaglabs-automation-cypress.git
   cd swaglabs-automation-cypress
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Running Tests

To run the tests, use the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner. You can then select the test files you want to run.

For headless execution, you can run:

```bash
npx cypress run
```

## Folder Structure

The project follows a standard Cypress folder structure:

```
swaglabs-automation-cypress/
├── cypress/
│   ├── fixtures/        # Test data files
│   ├── integration/     # Test specifications
│   ├── support/         # Custom commands and global configurations
├── cypress.json         # Cypress configuration file
└── package.json         # Project dependencies and scripts
```

## Custom Commands

Custom commands are defined in the `cypress/support/commands.js` file. They help to simplify repetitive tasks within tests. Feel free to add your own custom commands as needed.

## Test Cases Covered

- Title of the website should be **Swag Labs**.
- User login with valid and invalid credentials.
- Adding and removing items from the cart.
- Completing the checkout process.
- Validation of product details on the product page.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch `git checkout -b feature/YourFeature`
3. Make your changes.
4. Commit your changes `git commit -m 'Add some feature'`
5. Push to the branch `git push origin feature/YourFeature`
6. Open a pull request.
