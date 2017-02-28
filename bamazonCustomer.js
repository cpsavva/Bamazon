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


//============== FUNCTIONS ======================= //

function start (){
	connection.query("SELECT * FROM products", function(err, res){
		// console.log(res[0].dept_name)
		console.log('Welcome to Bamazon')
		console.log('==========================================================')
		console.table(res)
		console.log('==========================================================')

		intro ();
	});

};

function intro (){
inquirer.prompt([
	{
		type:'input',
		message: 'What is the ID number of the item you would like to buy?',
		name: 'item' ,
	},
	{
		type: 'input',
		message: 'How many units would you like to buy?',
		name: 'units',
	}
	]).then(handleAns);
};


function handleAns(ans){
	// console.log(ans);
	var item = ans.item
	// console.log("item: " + item)
	var units = ans.units
	// console.log("units: " + units)
	connection.query('SELECT * FROM products WHERE item_id = ?', item, function(err, res){
			var stock = res[0].stock_quantity
			var updateAmt = stock - units
			
			if(units <= stock){
				updateOrder(units, updateAmt, item)

			}
			if(units > stock){
				console.log('Sorry insufficient stock')
				console.log('')
				console.log('Please try again.')
				console.log('')
				intro();


			}
		})

}

function updateOrder(quantity, newAmt, idNum){

	connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?',[newAmt, idNum], function(err, res){
					// console.log(res)
					})
	connection.query('SELECT * FROM products WHERE item_id = ?', idNum, function(err, res){
		// console.log("adjusted stock quantity: " + res[0].stock_quantity);
		console.log("Order Total: $"+ quantity * res[0].price_USD);
		console.log("");
		console.log("Thank you for shopping at Bamazon!")

		connection.end();
	})

}








//======= MAIN PROCESS ====//

connection.connect(function(err){
	// console.log("Connected as id: " + connection.ThreadId)
	start();
})
