# Demonstrate a bug

This seems to be a bug in webpack. When this app is built with browserify, it works fine, but when built with webpack, some react-bootstrap `<Button>` elements don't call their onClick function when the button is clicked. In this demo, the first `Click me` button that is created when the app is started works, but subsequent ones created by clicking `Make a new button` don't work. See the description below to see how to modify the code to produce variations of this error.



## Live Demo

You can view a live version of this demo [here](https://altbug.firebaseapp.com/).


## Setup Instructions
First, clone [https://github.com/goatslacker/alt](https://github.com/goatslacker/alt), checkout the `v0.17.1` tag and run `npm install`.

Then clone this repo, run `npm install`
 and make the following edits:

### webpack.config.js
 Change `resolve: alias:` to point to your `alt` repo,
or remove it to use `alt` from your `node_modules`

## Running instructions
To build with webpack and start a server:
```bash
$ make simple
```
and visit [http://localhost:8000](http://localhost:8000).


To build with browserify and start a server:
```bash
$ make browser
```
and visit [http://localhost:8000](http://localhost:8000).


## Description

This example shows a bug that happens when an alt repo is loaded locally, but is not present when the same version of alt (`v0.17.1`) is used from node_modules as installed by npm.

The bug is that a button does not call its handler when clicked. In order for the bug to be activated, the top-level react component has to be wrapped in AltContainer. If it instead uses mixins, the bug does not occur. (See comments in `Dashboard.jsx`).

Also, the bug is only partially present ( the first button added works, others don't work ) when the props of the button component are overwritten with similar data. That is the state the current demo is in. If the props are left as passed from the parent, none of the buttons work. Comment out the indicated line in `Dashboard.jsx` to see this.
