CREATE DATABASE nova_db;
CREATE TABLE orders (id integer PRIMARY KEY NOT NULL UNIQUE, name VARCHAR(40), phone_number TEXT, address VARCHAR(50), order_status TEXT, order_date TEXT);




