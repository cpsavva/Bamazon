CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT(4),
	product_name VARCHAR(100) NOT NULL,
	dept_name VARCHAR(100) NOT NULL,
	price_USD DECIMAL(10,2) NULL,
	stock_quantity INT(4) NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, dept_name, price_USD, stock_quantity)
VALUES('123', 'iPhone case', 'smartphones', 10.00, 50),
('234','watch', 'watches', 74.99, 25),
('345', 'floral dress', 'womenswear', 89.99, 10),
('456', 'Illmatic by Nas', 'music', '12.00', 50),
('567', 'socks', 'clothing', 6.00, 10),
('678', 'hairbrush', 'beauty', 3.50, 75),
('789', 'grey suit', 'menswear', 150, 5),
('910', 'paper', 'office supplies', 11, 275),
('012', 'frying pan', 'kitchenwear', 27.50, 70),
('987', 'lego duplo set', 'toys', 17, 100);