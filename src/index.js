const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const srcPath = core.getInput("sql_directory")
var sqlDirectories;

fs.readdir(srcPath, function (err, files)
{
  console.log(files);
  sqlDirectories = files;
});

for(var i = 0; i < sqlDirectories.length; i++)
{
  console.log(sqlDirectories[i]);
}

core.info('Finished Running');