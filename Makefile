simple:
	webpack
	cd www;python -m SimpleHTTPServer

browser:
	npm run browser
	cd public;python -m SimpleHTTPServer

server:
	node server.js

deploy:
	webpack -p 
	firebase deploy
	firebase  open

