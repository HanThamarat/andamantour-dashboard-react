const mysql = require('mysql2/promise')
require('dotenv').config()

// const conn = mysql.createPool(process.env.DATABASE_URL)
const conn = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    port: process.env.DATABASE_PORT
})

resule = conn.getConnection((err) => {
    if(err){
        return console.log(`database connection err : ${err}`)
    }
    return console.log('connect database success')
})

module.exports = conn;