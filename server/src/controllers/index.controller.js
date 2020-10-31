const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123',
    database: 'nova_db',
    port: '5432'
});

const getOrders = async (req, res) => {
    const response = await pool.query('SELECT * FROM orders');
    res.status(200).json(response.rows);
};

const getStat = async(req, res) => {
    const response = await pool.query("select order_date, concat(count(case when order_status = 'confirmed' then 1 else null end), ' (', (cast(count(case when order_status = 'confirmed' then 1 else null end) as float)/cast(count(order_status) as float) * cast(100 as float)), '%)') as confirmed, count(case when order_status = 'canceled' then 1 else null end) as canceled, count(case when order_status = 'postponed' then 1 else null end) as postponed from orders group by order_date;");
    console.log(response);
    res.status(200).json(response.rows);
}
const getOrderById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
    res.json(response.rows);
};

const createOrder = async (req, res) => {
    const { id, name, phone_number, address, order_status } = req.body;
    try {
        const response = await pool.query("INSERT INTO orders (id, name, phone_number, address, order_status, order_date) VALUES ($1, $2, $3, $4, $5, to_char(current_date, 'YYYY-MM-DD'))", [
            id, 
            name, 
            phone_number, 
            address, 
            order_status
        ]);
        res.json({
            message: 'Order Added successfully',
            body: {
                user: { id, name, phone_number, address, order_status }
            }
        })
    } catch (error) {
        console.log(error);
        res.json('Something go wrong');
    }
};

const updateOrder = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, phone_number, address, order_status } = req.body;

    try {
        const response = await pool.query('UPDATE orders SET name = $1, phone_number = $2, address = $3, order_status= $4 WHERE id = $5', [
            name,
            phone_number,
            address,
            order_status,
            id
        ]);
        res.json('User Updated Successfully');
    } catch (error) {
        console.log(error);
        res.json('something go wrong');
    }
};

module.exports = {
    getOrders,
    createOrder,
    getOrderById,
    updateOrder,
    getStat
};