import mysql from 'mysql2/promise'


let connection

const createConnection = async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myTeam'
  })
}

const query = async queryStatment => {
  const [results] = await connection.query(queryStatment)
  connection.end()
  return results
}

const viewAllDepartments = async () => await query('SELECT * FROM departments')

const viewAllRoles = async () => await query('SELECT * FROM roles')

const viewAllEmployees = async () => await query('SELECT * FROM employees')


const addADepartment = () => {
  return 'add a department'
}

const addARole = () => {
  return 'add a role'
}

const addAnEmployee = () => {
  return 'add a role'
}

const updateAnEmployeeRole = () => {
  return 'update an employee'
}

export default { 
  createConnection,
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addAnEmployee,
  updateAnEmployeeRole
}