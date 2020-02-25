const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


inquirer.prompt([
    questions
]).then(function(inquirerData){
    console.log(inquirerData)
});



const questions = [
    {
        type: "input", 
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input", 
        message: "What is your Github Username?",
        name: "username"
    },
    {
        type: "input", 
        message: "What is your Github Email?",
        name: "email"
    },
    {
        type: "input", 
        message: "What is your favorite color?",
        name: "color"
    }
  
];

 then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

function writeToFile(fileName, data) {
 
}

function init() {

init();
