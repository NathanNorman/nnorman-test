const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const srcPath = core.getInput("sql_directory");
const master = core.getInput("master_sql");

fs.readdir(srcPath, function (err, files)
{
  core.info("Displaying files: ");
  core.info(files);
});
core.info(master);
core.info('Finished Running');