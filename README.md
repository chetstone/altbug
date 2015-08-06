# Demonstrate a bug

I don't know if this is a bug in alt, react, react-bootstrap or webpack.



## Live Demo

You can view a live version of this demo [here](https://altbug.firebaseapp.com/).


## Setup Instructions

To run this example locally, clone the repo, run `npm install`
 and make the following edits:

### webpack.config.js
Change `resolve: alias:` to point to your alt repo,
or remove it to use `alt` from your `node_modules`

### firebase.json
If you want to use a firebase account, edit this to point to your firebase url

## Running instructions
To push to your firebase, run
```bash
$ make deploy
```
and the example should open in your browser.


To run a webpack hot server locally, run
```bash
$ make server
```


You can then visit the example in the browser of your choice at [http://localhost:8081/webpack-dev-server/](http://localhost:8081/webpack-dev-server/).


## Description

This example shows a bug that happens when an alt repo is loaded locally, but is not present when the same version of alt (`v0.17.1`) is used from node_modules as installed by npm.

The bug is that a button does not call its handler when clicked. In order for the bug to be activated, the top-level react component has to be wrapped in AltContainer. If it instead uses mixins, the bug does not occur. (See comments in `Dashboard.jsx`).

Also, the bug is only partially present ( the first button added works, others don't work ) when the props of the button component are overwritten with similar data. That is the state the current demo is in. If the props are left as passed from the parent, none of the buttons work. Comment out the indicated line in `Dashboard.jsx` to see this.
