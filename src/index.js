const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const masterSQL = core.getInput("master_sql");
const currentSQL = core.getInput("current_sql");

console.log("MASTER SQL:");
console.log(masterSQL);
console.log("CURRENT SQL: ");
console.log(currentSQL);