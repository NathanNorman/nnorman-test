const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

//  INSTANCE VARIABLES
const MASTERSQL = core.getInput("master_sql");        //Pulls String of sql files from master
const CURRENTSQL = core.getInput("current_sql");      //Pulls String of sql files from current branch

const master_list = MASTERSQL.split(' ');
const current_list = CURRENTSQL.split(' ');

// INPUT: NONE
// OUTPUT: Array of new sql files
// Compares current_list to master_list to generate array of new sql files
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
  process.exit(1);
}

function TERMINATE_SUCCESS(message)
{
  core.info("SUCCESS: " + message);
  process.exit(1);
}
//  END TERMINATION METHODS




//  INITIALIZE METHOD
function init()
{
  var newSQL = newSQLFiles();

  if(newSQL.length == 0) TERMINATE_SUCCESS("No changes made to sql files"); //No new sql files added. Terminate check as successful

  console.log(newSQL);
  TERMINATE_SUCCESS("Done");
}

init();     //call initialize method