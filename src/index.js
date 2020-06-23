const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

//  INSTANCE VARIABLES
const MASTERSQL = core.getInput("master_sql");        //Pulls String of sql files from master
const CURRENTSQL = core.getInput("current_sql");      //Pulls String of sql files from current branch

const master_list = MASTERSQL.split(' ');          //Divide MASTERSQL into Array
const current_list = CURRENTSQL.split(' ');        //Divide CURRENTSQL into Array


// INPUT: NONE
// OUTPUT: Array of new sql files
// Compares current_list to master_list to generate array of new sql files
function newSQLFiles()
{
  var newSQL = [];
  for(var file in current_list)
  {
    if(!master_list.includes(file))
    {
      newSQL.push(current_list[i]);
    }
  }
  core.info("New files detected: " + newSQL.toString());
  return newSQL;
}

function checkFileFormat(newSQL)
{
  core.info("Initiate Regex File Format Test");
  const regex = RegExp("v" + year + ".[0-1][1-9].[0-3][0-9]_\\d{2}__.*");
  for(file in newSQL)
  {
    core.info("Checking " + file);
    if(!regex.test(file)) TERMINATE_FAIL(file + " fails to match format. Format must be in format vYYYY.MM.DD.xx__Description");
  }
  core.info("Regex File Format Test Successful!");
}


//  TERMINATION METHODS
function TERMINATE_FAIL(message)
{
  core.setFailed("FAILED: " + message);
}

function TERMINATE_SUCCESS(message)
{
  core.info("SUCCESS: " + message);
}

//  INITIATION METHODS
function runTests(newSQL)                               //Runs tests in sequence
{
  checkFileFormat(newSQL);
  TERMINATE_SUCCESS(" All tests have passed");
}

function init()
{
  var newSQL = newSQLFiles();                           //Array of new sql files

  if(newSQL.length == 0)
  {
    TERMINATE_SUCCESS("No changes made to sql files");  //No new sql files added. Terminate check as successful
  } else
  {
    runTests(newSQL);                                   //If there are sql files added, run the other tests
  }
}
init();                                                 //call initialize method