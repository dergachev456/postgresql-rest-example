const express = require('express');
var cors = require('cors');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const whitelist = ['http://localhost:3000', 'http://localhost:5000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));

// Routes
app.use(require('./routes/index'));

app.listen(4000);
console.log('Server on port', 4000);