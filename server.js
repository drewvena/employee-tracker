const inquirer = require('inquirer');
const mysql = require ('mysql2');
const {start} = require ('./util/inquire')


const connection =  mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'imsweet6',
    database: 'employee'
})

function begin() {
    start()
}

begin()