const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
//console.log(notes.addNote(9,4));

// var user = os.userInfo();	
// console.log(`hello ${user.username} ${notes.age}`);
// fs.appendFile('greetings.txt','world ${user.username}', function (err) {
// 		if(err){
// 			console.log('unable to write to file');
// 		}
// 	});


// NPMs
// const _ = require('lodash');
// console.log(_.isString('true'));
// console.log(_.isString('true'));


// process.argv and yargs
var yargs = require('yargs');
const argv = yargs.argv;
// var command = process.argv[2];
console.log('yargs',argv.title);





console.log("End");