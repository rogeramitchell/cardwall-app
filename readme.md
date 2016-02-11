# Cardwall App
The goal of the app is to allow users the ability to manage a series of cards and drag/drop these amongst a set of columns. This is an implementation of a kanban board using a React app. Here are the ideal requirements for the first version of this app.

- View a set of cards and columns
- View a specific card with a greater set of details
- Create a new card
- Search across the cards in the current view
- Drag and drop cards from one column to another

## To Do List

- Implement a reference to the Salesforce Lightning Design System CSS file

## Development Environment Setup Steps
A small sidenote regarding the number of `npm install` that are occurring: I'm working with this for the first time, so it's a learning curve to get the right things into my `package.json` for using Gulp. It also might be an issue that my `gulpfile.js` has extraneous tasks in it.

1. `take` to a new directory
2. `git init`
3. `npm init`
4. `npm install --save react react-dom babelify babel-preset-react`
5. `npm install @salesforce-ux/design-system`
6. `git add *` (or whatever files are relevant)
	- package.json
	- node_modules/
	- readme.md
7. `mkdir css`
8. `mkdir scripts`
9. `touch index.html`
10. `npm install --save gulp`
11. `touch gulpfile.js`
12. `npm install --save vinyl-source-stream`
13. `npm install --save browserify`
14. `npm install --save watchify`