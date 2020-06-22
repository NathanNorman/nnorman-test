const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

//  INITIATE VARIABLES
const MASTERSQL = core.getInput("master_sql");        //Pulls String of sql files from master
const CURRENTSQL = core.getInput("current_sql");      //Pulls String of sql files from current branch

var master_list = MASTERSQL.split(' ');
var current_list = CURRENTSQL.split(' ');
//  END INITIATE VARIABLES

init();     //call initialize method

//  INITIALIZE METHOD
function init()
{
  var newSQLFiles = newSQLFiles();

  if(newSQLFiles.length == 0)
  {
    TERMINATE_SUCCESS("No changes made to sql files");
  }
}

function newSQLFiles()
{
  var newSQL = [];
  for(var i = 0; i < current_list.length; i++)
  {
    if(!master_list.includes(current_list[i]))
    {
      newSQL.push(current_list[i]);
    }
  }
  return newSQL;
}



//  TERMINATION METHODS
function TERMINATE_FAIL(message)
{
  core.error("ERROR: " + message);
}

function TERMINATE_SUCCESS(message)
{
  core.info("SUCCESS: " + message);
}
//  END TERMINATION METHODS