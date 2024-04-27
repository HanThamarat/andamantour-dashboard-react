const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.get('/', async (req, res) => {
    res.json('Hollo Server')
});

readdirSync('./Routers').map((r) => app.use('/api', require('./Routers/' + r)));

app.listen(port, () => {
    console.log(`Server runing port ${port}`)
});