# Cardwall App
The goal of the app is to allow users the ability to manage a series of cards and drag/drop these amongst a set of columns. This is an implementation of a kanban board using a React app. Here are the ideal requirements for the first version of this app.

- View a set of cards and columns
- View a specific card with a greater set of details
- Create a new card
- Search across the cards in the current view
- Drag and drop cards from one column to another

## To Do List

- Implement a reference to the Salesforce Lightning Design System CSS file
- Break out the initial page into several different components
	- App
		- Header
			- Brand
			- Search
				- SearchResult
		- ColumnSet
			- Column
				- ColumnHeader
				- ColumnEntry
					- Card
		- CardDetail
		- CardEdit

## Implementing Styling for Components
To match the styling of Salesforce, we'll leverage the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com) to provide attractive styles around header, search, and cards.

### Header
Headers will leverage one of the sizes available as a [text utility](https://www.lightningdesignsystem.com/components/utilities/text).

### Search & Search Results
To facilitate search input and results, we'll use the [Single Scope Lookup](https://www.lightningdesignsystem.com/components/lookups#single-scope) to allow users to search across all Cards. These will allow the user to enter a search term, and we'll use JavaScript to present a list of results based on those Cards in the current view.

### Column Header
Headers will leverage one of the sizes available as a [text utility](https://www.lightningdesignsystem.com/components/utilities/text).

### Column Entry / Card
We've selected the [Board](https://www.lightningdesignsystem.com) component. The Column will contain a `ul` and each `li` will represent the Card. Cards will be comprised of a set of `p` tags that source data from an underlying Salesforce object.

### CardDetail & CardEdit
This will act as an overlay that occurs when a user clicks on a Card component's number. This will launch the user to a view that includes more data than the Card view provides. We've selected a combinaton of the [Base Modal](https://www.lightningdesignsystem.com/components/modals#base) and [Stacked Form](https://www.lightningdesignsystem.com/components/forms/#stacked-form) components. The differentiator between CardDetail and CardEdit is whether a [Read Only State](https://www.lightningdesignsystem.com/components/forms/#read-only-state) is being leveraged on the form output.

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