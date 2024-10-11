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

# Test Case: Login Page

## 1. URL of Login Page
- **Test Step**: Navigate to the login page.
- **Expected Result**: The URL should match `https://example.com/login`.

## 2. Title of the Login Page
- **Test Step**: Check the title of the login page.
- **Expected Result**: The title should be "User Login".

## 3. Accessing the Site with Correct Credentials
- **Test Step**: Enter valid username and password and submit.
- **Expected Result**: User should be redirected to the dashboard, and a welcome message should be displayed.

## 4. Accessing the Site with Incorrect Credentials
- **Test Step**: Enter invalid username and/or password and submit.
- **Expected Result**: An error message "Invalid username or password" should be displayed, and the URL should remain as `https://example.com/login`.

---

# Test Case: Open Menu

## 1. All Menu Items
- **Test Step**: Open the menu.
- **Expected Result**: All menu items should be visible, including "About", "Logout", "Reset App State", and "Close".

## 2. Verify Clicking About Will Open a Page
- **Test Step**: Click on the "About" menu item.
- **Expected Result**: A new page containing information about the application should open.

## 3. Verify Logging Out
- **Test Step**: Click on the "Logout" menu item.
- **Expected Result**: The user should be logged out and redirected to the login page.

## 4. Verify Resetting App State
- **Test Step**: Click on "Reset App State".
- **Expected Result**: All added options should be removed, and the app should return to its default state.

## 5. Verify Closing the Open Item
- **Test Step**: Click on the "Close" button in the left pane.
- **Expected Result**: The left pane should close successfully.

---

# Test Case: Filter

## 1. Verify Filtering with All Three Options
- **Test Step**: Apply each of the three filter options sequentially.
- **Expected Result**: The displayed items should update according to the selected filter criteria.

---

# Test Case: Add to Cart

## 1. Verify Removing from the Cart
- **Test Step**: Add an item to the cart and then remove it.
- **Expected Result**: The cart should be empty after removal.

## 2. Verify Continue Shopping
- **Test Step**: Click on the "Continue Shopping" button after adding an item to the cart.
- **Expected Result**: User should be redirected back to the product listing page.

## 3. Verify Checkout
- **Test Step**: Click on the "Checkout" button in the cart.
- **Expected Result**: The user should be taken to the checkout page.

## 4. Verify Adding Information on Checkout
- **Test Step**: Enter required information (e.g., shipping address, payment details) on the checkout page.
- **Expected Result**: All information should be accepted without errors.

## 5. Verify Cancelling Checkout
- **Test Step**: Click on the "Cancel" button on the checkout page.
- **Expected Result**: The user should be returned to the cart page with no changes made.


## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch `git checkout -b feature/YourFeature`
3. Make your changes.
4. Commit your changes `git commit -m 'Add some feature'`
5. Push to the branch `git push origin feature/YourFeature`
6. Open a pull request.
