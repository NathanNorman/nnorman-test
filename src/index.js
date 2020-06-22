const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

const srcPath = core.getInput("sql_directory")
core.info("Reading Path: " + srcPath);

const payload = github.context.payload;
core.info(payload);

// fs.readdir(srcPath, function (err, files)
// {
//   //handling error
//   if (err) {
//     return console.log('Unable to scan directory: ' + err);
//   }
//   //listing all files using forEach
//   files.forEach(function (file)
//   {
//     core.info(file.valueOf());
//   });
// });

core.info('Finished Running');