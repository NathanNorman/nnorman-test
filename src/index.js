const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const MASTERSQL = core.getInput("master_sql");
const CURRENTSQL = core.getInput("current_sql");

var master_list = MASTERSQL.split(' ');
var current_list = CURRENTSQL.split(' ');

for(var i = 0; i < master_list.length; i++)
{
  console.log(master_list[i]);
}

for(var i = 0; i < current_list.length; i++)
{
  console.log(current_list[i]);
}