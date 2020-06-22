const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const srcPath = core.getInput("sql_directory")
var sqlDirectories;

fs.readdir(srcPath, function (err, files)
{
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }else
  {
    sqlDirectories = files;
  }
});

for(var i in sqlDirectories)
{
  core.info(i);
}

core.info('Finished Running');