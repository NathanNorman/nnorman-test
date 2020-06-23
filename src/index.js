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
  for(var i = 0; i < current_list.length; i++)
  {
    if(!master_list.includes(current_list[i]))
    {
      newSQL.push(current_list[i]);
    }
  }
  core.info("New sql files detected: " + newSQL.toString());
  return newSQL;
}

//INPUT: Array of new Files
//OUTPUT: NA
//File format test. Check if every file in newSQL matches the regex format.
function fileFormatTest(newSQL)
{
  NEW_SECTION("Initiate Regex File Format Test");

  const regex = RegExp("v" + "2020" + ".[0-1][1-9].[0-3][0-9]_\\d{2}__.*");
  for(var i = 0; i < newSQL.length; i++)
  {
    core.info("Checking " + newSQL[i]);
    if(!regex.test(newSQL[i]))                        //Fail fileFormatTest
      TERMINATE_FAIL(newSQL[i] + " fails to match format. Format must be in format vYYYY.MM.DD.xx__Description");
  }
  core.info("Regex File Format Test Successful!");
}


//  LOGICMETHODS
function TERMINATE_FAIL(message)
{
  core.setFailed("FAILED: " + message);
}

function TERMINATE_SUCCESS(message)
{
  core.info("SUCCESS: " + message);
}

function NEW_SECTION(message)
{
  core.info("-----------------------------------");
  core.info(message);
  core.info("-----------------------------------");
}

//  INITIATION METHODS
function runTests(newSQL)                               //Runs tests in sequence
{
  fileFormatTest(newSQL);
  TERMINATE_SUCCESS(" All tests have passed");          //When all tests have passed.
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