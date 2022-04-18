import { 
  Role, 
  Employee, 
  Department 
} from '../models/associations.js'

const viewAllDepartments = async () => {
  const data = await Department.findAll()
  let departmentsTable = []
  data.forEach(({id, name}) => departmentsTable.push({id, name}))
  return departmentsTable
}

const viewAllRoles = async () => {
  const rolesTable = []
  const roles = await Role.findAll({
    include: 'department'
  })
  roles.forEach(({id, title, salary, department}) => {
    rolesTable.push({
      id, title, salary, 
      department: department.name
    })
  })
  return rolesTable
}

const viewAllEmployees = async () => {
  const employeesTable = []
  const results = await Employee.findAll({
    include: ['role', 'manager']
  })
  results.forEach(employee => {
    let employeeData = {
      id: employee.id,
      Name: employee.getFullName(),
      Role: employee.role.title,
    }
    if (employee.manager) employeeData.Manager = employee.manager.getFullName()
    employeesTable.push(employeeData)
  })
  return employeesTable
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