# PetPicks

PetPicks is a single page application that shows off user submitted pets in an interactive game.

## How PetPicks Works
The "Play" page displays two random submitted pet images for the user to select. When the user clicks an image, a like will be attributed to the corresponding pet and a new pet image will take the right spot, rotating out the pet image on the left.

The "Leaderboard" page, by default, displays all of the user submitted pets in order of their likes received by the user base. You can also choose to filter by pet name and pet type (dog, cat, etc.).

The "Post Your Pet" page allows users to submit images of their own pets to add to the catalogue. There is some simple validation added to the form so that users cannot submit blank information.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project directory, run

### npm install -g json-server

Installs json server, the back-end for this project.

### `npm install`

Installs packages necessary for the build to function.

## Activation
In the project directory, run

### `json-server --watch db.json`

To activate the json server.


## Available Front-End Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
