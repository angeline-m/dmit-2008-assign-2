# Employee Manager

This application handles the input and validation of user data to have users sign up and log into a website. This project uses Express and Node.js to manage this.

The signup, login, and dashboard views are all rendered from the `index.js` file. When a user attempts to log in, the functions from `loginService.js` are called to validate the credentials to see if they match an existing user in the `users.json` file. The `fileService.js` file contains the code that both reads from and writes to the `users.json` file. Not only are the functions in this file referenced in `loginService.js`, they are also utilized in the `signupService.js` file to ensure that a new user does not sign up with an email that is already being used by an existing user before being created. Once the user credentials are validated, the user is either redirected to the login page (if they signed up), or a session is started and they are taken to the dashboard page (if they are logged in).

## Installation

Make sure you go in your terminal and `npm install` to install all the necessary packages.

The packages included in this project are:
- cookie-session for user sessions
- cors for Express middleware
- dotenv for loading environment variables
- ejs for templating HTML markup
- express framework for the entire application/API
- uuid for generating keys
- nodemon to watch file changes while the project is being run