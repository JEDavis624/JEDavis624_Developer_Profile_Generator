const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
  
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
  }

// inquirer.prompt([
// 
// ]).then(function(inquirerData){
//     console.log(inquirerData)
// })



const questions = [
    {
        type: "input", 
        message: "What is your Github Username?",
        name: "username"
    },
    {

    }
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();
