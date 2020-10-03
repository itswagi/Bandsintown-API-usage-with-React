## Deployed app

You'll find a deployed version of this app on (https://itswagi.github.io/jobassignmnet/)

## Architecture and Design

The app uses React Components to encapsulate features. A separate component is used for making template of artist profiles to display on page. A separate component templates the events to display. Moreover, another component then renders the template components to the DOM. This allows for keeping code clean and easy passing of states between props. Furthermore, Api calls are made in a separate js file and the App.js component gathers all the components together to render on DOM when needed. This strategy allows for easy tracking of states and information sharing between components and groups similar features together. Keeping code concise and compartmentalized allows for easy debugging and addition of new features quickly.

The design of the app is fairly minimal. A single prompt to enter artist information shows up on the screen when you visit the page. Artist information is shown below it when searched for and events of the artist are then shown when a person clicks on the artists profile. The color scheme is also minimal and diverts user attention towards changes in information on the page as the user searches for information. Moreover, all the information is available to the user at all times, the user can search for artists again and see events quickly. Keeping user clicks to a minimum on the page was also kept in mind when designing the layout.

## Running the project

To run the project on your local machine, simply download the zip file from the repository and perform 1. npm install and 2. npm start, to open the app in your browser.

### To-do

Implement Unit Tests as I am new to testing in react and need more time to understand how tests are conducted in this framework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
