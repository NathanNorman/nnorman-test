const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

const srcPath = core.getInput("src_dir")
core.info("Reading " + srcPath);

fs.readdir(srcPath, function (err, files) {
  //handling error
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