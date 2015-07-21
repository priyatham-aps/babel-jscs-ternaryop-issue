Demo for issue with ternary operator in babel-jscs
===================================================

A minimal repo to demonstrate the issue with conditional (ternary) operator in babel-jscs.

Execute the following commands in terminal to reproduce the issue:

	$ npm install
	$ ./node_modules/.bin/jscs index.js
	$ ./node_modules/.bin/jscs index.js --fix
