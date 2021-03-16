const inquirer = require ('inquirer')

function start () {
    return new Promise ((res, rej) => {
        inquirer.prompt ([{
            type: 'list',
            name: 'options',
            message: 'Select One',
            choices: ['View All Employees', 'View All Employees by Manager', 'View All Employees by Department', 'Add Employee', 'Delete Employee', 'Update Employee Info']
        }]).then(answer => {
            res(answer)
        }).catch(err => {
            if (err) rej(err);
        })
    })
}

module.exports = {start}