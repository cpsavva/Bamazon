'use strict'
require('console.table');
const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection ({

	host: "localhost",
	port: 3306,

	user: "root",
	
	password: "",
	database: 'bamazon',

});


connection.connect(function(err){
	console.log("Connected as id: " + connection.ThreadId)
	start();
})

function start (){
	connection.query("SELECT * FROM products", function(err, res){
		// console.log(res[0].dept_name)
		console.log("Welcome to Bamazon")
		console.log('==========================================================')
		console.table(res)
		console.log('==========================================================')
	});
};


