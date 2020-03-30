const fs = require('fs');
const path = require('path');
var mkdirp = require("mkdirp");
var rimraf = require("rimraf");

const directory = 'built';

const builtDir = fs.path(__dirname + './built')

//Delete the 'built' folder
if (builtDir) {
    rimraf("built", function (err) {
        if (err) console.log(err);
        console.log("Successfully deleted a directory");
    });
}

//then recreate it
if (!builtDir) {
    mkdirp("built", function (err) {
        if (err) console.log(err);
        console.log("Successfully created the 'built' directory");
    });
}