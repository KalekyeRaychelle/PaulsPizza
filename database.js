var mysql=require('mysql2')
const express=require('express')
var connection=mysql.createConnection({
    host:'localhost',
    database:'PaulsPizza',
    user:'root',
    password:'Kalekye123_'
})
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection;