const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const srcPath = core.getInput("sql_directory")
var sqlDirectories;

fs.readdir(srcPath, function (err, files)
{
  console.log(files);
  for(var i = 0; i < files.length; i++)
  {
    console.log(files[i]);
  }
});

core.info('Finished Running');