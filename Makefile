server:
	node server.js

deploy:
	webpack -p 
	firebase deploy
	firebase  open

tests:
	mocha -u exports -R spec --compilers js:babel/register --require babel-core/external-helpers test

