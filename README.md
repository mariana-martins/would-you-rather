# Udacity Nano-Degree Project: **Would You Rather?**

This is a mandatory project to complete Udacity React Nano Degree.
The goal here is to implement an App to lets a user play the _Would You Rather?_ game.

**How does it work?**

A question with two options is going to be displayed and a user needs to choose one option. 
The user isn't allowed to select both options or any option. 
Users can create new questions and verify his/her score on the Leaderboard page. 
It shows how many questions users answered and how many questions users created.

## How to Run

* Run: `git clone https://github.com/mariana-martins/would-you-rather.git`
* Open your terminal on project's folder
* Run `npm install` on Terminal to install all project dependencies
* Run `npm start` on Terminal to start the development server

## Project Structure

This project uses the following folders as its architecture.

* public: contains static files
* src/actions: contains the Redux action files
* src/components: contains shared components across several pages. 
* src/components/pages: contains components representing pages on this project.
* src/middlewares: contains the Redux middlewares files 
* src/reducers: contains the Redux Reducers files
* src/utils: contains `_DATA.js` and `API.js`. Files to provide data and simulate the backend of the application.
* src/actions: contains the Redux action files

## Udacity API integration

The `_DATA.js` is a file provided by Udacity [in this repository](https://github.com/udacity/reactnd-project-would-you-rather-starter).
This file is more like a fake database and it contains methods to access the data.

