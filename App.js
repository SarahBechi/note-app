console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
//const argv = process.argv;
var title = yargs.argv.title;
//var title = process.argv[3];
var body = yargs.argv.body;
//var body = process.argv[4];
var command = yargs.argv._[0];
//var command = process.argv[2];

if (command === "add") {
    console.log("adding note");
    notes.addingNote(title, body);
} else if (command === "remove") {
    console.log("removing note");
    notes.removeNote(title);
} else if (command === "read") {
    console.log("reading note");
    notes.readNote(title);
} else if (command === "list") {
    console.log("listing all notes");
    notes.getAll();
} else {
    console.log("Unknown command was used!");
}