CREATE DATABASE nova_db;
CREATE TABLE orders (id integer PRIMARY KEY NOT NULL UNIQUE, name VARCHAR(40), phone_number TEXT, address VARCHAR(50), order_status TEXT, order_date TEXT);
INSERT INTO orders (id, name, phone_number, address, order_status, order_date) VALUES ('222222', 'dev2', '0506778104', 'Latar, 5', 'canceled', '2019-01-01');





select order_date,  count(case when order_status = 'confirmed' then 1 else null end) as confirmedCount, count(case when order_status = 'canceled' then 1 else null end) as canceledCount, count(case when order_status = 'postponed' then 1 else null end) as postponedCount from orders group by order_date;

select order_date,  (cast(count(case when order_status = 'confirmed' then 1 else null end) as float)/cast(count(order_status) as float) * cast(100 as float) ) as confirmedCount, count(case when order_status = 'canceled' then 1 else null end) as canceledCount, count(case when order_status = 'postponed' then 1 else null end) as postponedCount from orders group by order_date;


select order_date, concat(count(case when order_status = 'confirmed' then 1 else null end), ' (', (cast(count(case when order_status = 'confirmed' then 1 else null end) as float)/cast(count(order_status) as float) * cast(100 as float)), '%)') as confirmedCount, count(case when order_status = 'canceled' then 1 else null end) as canceledCount, count(case when order_status = 'postponed' then 1 else null end) as postponedCount from orders group by order_date;