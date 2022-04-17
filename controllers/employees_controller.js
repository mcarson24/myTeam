import Role from '../models/Role.js'
import Employee from '../models/Employee.js'
import Department from '../models/Department.js'

Role.belongsTo(Department, { foreignKey: 'department_id', as: 'department' })
Role.hasMany(Employee, { foreignKey: 'role_id' })

Department.hasMany(Role, { foreignKey: 'department_id' })

Employee.belongsTo(Role, { foreignKey: 'role_id', as: 'role' })
Employee.hasMany(Employee, { foreignKey: 'manager_id' })
Employee.belongsTo(Employee, { foreignKey: 'manager_id', as: 'manager' })


const viewAllDepartments = async () => {
  const data = await Department.findAll({
    attributes: ['id', 'name']
  })
  let departments = []
  data.forEach(({id, name}) => {
    departments.push({id, name})
  })
  console.table(departments)
}

const viewAllRoles = async () => {
  const roles = await Role.findAll({
    include: 'department'
  })
  const rolesTable = []
  roles.forEach(({title, salary, department}) => {
    rolesTable.push({
      title, salary, 
      department: department.name
    })
  })
  console.table(rolesTable)
}

const viewAllEmployees = async () => {
  const results = await Employee.findAll({
    include: ['role', 'manager']
  })
  const employeesTable = []
  results.forEach(employee => {
    let employeeData = {
      Name: employee.getFullName(),
      Role: employee.role.title,
    }
    if (employee.manager) employeeData.Manager = employee.manager.getFullName()
    employeesTable.push(employeeData)
  })
  console.table(employeesTable)
}


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
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addAnEmployee,
  updateAnEmployeeRole
}