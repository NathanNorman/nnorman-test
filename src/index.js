const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');
//sfdsss
const sql_directory = core.getInput('sql_directory');
const GITHUB_WORKSPACE = process.env.GITHUB_WORKSPACE;

const srcPath = "/home/runner/work/nnorman-test/Common/src/main/sql/iris/migration/2020/2020"
core.info("Reading directory of " + srcPath);

fs.readdir(srcPath, function (err, files) {
  //handling errorf
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file)
  {
    console.log(file);
  });
});

core.info('Finished Running');