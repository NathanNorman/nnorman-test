const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const srcPath = core.getInput("sql_directory")

fs.readdir(srcPath, function (err, files)
{
  console.log(files);
});

core.info('Finished Running');