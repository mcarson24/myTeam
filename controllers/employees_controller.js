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

const addADepartment = async name => {
  if (name) await Department.create({ name })
}

const addARole = async ({ title, salary, department }) => {
  const queriedDepartment = await Department.findOne({ where: { name: department } })
  if (title && salary && department) await Role.create({ title, salary, department_id: queriedDepartment.id })
}

const addAnEmployee = async ({ first_name, last_name, role: title, manager: managerName}) => {
  const role = await Role.findOne({ where: { title } })
  
  let manager, values
  if (managerName !== 'NONE') {
    managerName = managerName.split(' ')
    manager = await Employee.findOne({ where: { first_name: managerName[0], last_name: managerName[1] } })
    values = { first_name, last_name, role_id: role.id, manager_id: manager.id }
  } else {
    values = { first_name, last_name, role_id: role.id }
  }
  if (first_name, last_name, title, managerName) await Employee.create(values)
}

const updateAnEmployeeRole = async ({ employee: employeeName, role}) => {
  const name = employeeName.split(' ')

  const employee = await Employee.findOne({ where: { first_name: name[0], last_name: name[1] } })
  const newRole = await Role.findOne({ where: { title: role } })
  
  await employee.update({ role_id: newRole.id })
  await employee.save()
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