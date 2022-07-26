# Todo - an organised task manager.

An online tool for real estate agents, Todo is a modern checklist web application. This tool keeps track of the background checks performed by companies in the real estate tech industry on agents. With the tool, you can complete and uncomplete the record of an agent, and an indicator at the top indicates the number of completed items. The application includes features such as sorting, completing and loading all the agents that are available in the web application. The app is built as a React.js project and is responsive across all screen sizes.

# Installation

To run the application on any IDE download the file and follow the below commands:

1. npm install - This command installs a package and any packages that it depends on
2. npm start - Runs the app in development mode

# Usage

The web application is broken down into 4 components. The App component is under the common folder with its CSS and test file as it is the main component and represents the entire web application. The other components are present inside the components folder with each having a directory with their respective css and test files.

1. App - This is the main component file that renders all the other components. Along with rendering the components, the functionality to sort the array for completed todos, as well as state management for the total todo list has been implemented in this component. The load more functionality is also implemented in this component.

2. Banner - This component is used to display a banner that consists of an image and text to let the user know the goal of the web application.

3. Header - This component returns the main header of the web application that includes - the count for completed todos, the 'completed all' functionality and also displays the sort by dropdown.

4. Todo - This component has been refactored as opposed to the original file and uses Material-UI to display a Modal for each item. It also computes the concatenation of the name and address that has been consumed by the API and displays it accordingly.

The Index.jsx component is placed in the src folder since it is used to mount/render the main (App) react component onto the root element.

# Dependencies

A pre-requisite for using the dependencies is having node.js installed first.

The application is bootstrapped with create react app that includes the following dependencies: React, JSX, es6, development server and much more.

React-dom, react-query, and react-scripts are all node modules packages that have been installed using npm install.

Material-UI is used as a component library to create production-ready components (Modal)

React testing library has been used to test the React DOM
jest-dom is a companion library for the testing library that is more declarative and clear to read and maintain.

#Testing

Codesandbox uses the Jest library to run tests directly in the browser. However, if you would like to run test cases in your IDE, you can use the npm test command.
