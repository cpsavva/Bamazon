'use strict'

const mysql = require('mysql');
const inquirer = require('inquirer');
const queries = require('./queries.js');

var connection = mysql.createConnection ({

	host: "localhost",
	port: 3306,

	user: "root",
	
	password: "",
	database: 'bamazon',

});


connection.query(SELECT * FROM products)