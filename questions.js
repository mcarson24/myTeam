import employees_controller from './controllers/employees_controller.js'

const getAllDepartments = async () => {
  const departments = await employees_controller.viewAllDepartments()
  
  return departments.map(department => department.name)
}

const getAllRoles = async () => {
  const roles = await employees_controller.viewAllRoles()
  
  return roles.map(role => role.title)
}

const getAllEmployees = async () => {
  const employees = await employees_controller.viewAllEmployees()
  employees.unshift({ Name: 'NONE' })
  return employees.map(employee => employee.Name)
}

export default [
  {
    type: 'list',
    name: 'choice',
    'choices': [
      'View all departments', 
      'View all roles', 
      'View all employees', 
      'Add a department', 
      'Add a role', 
      'Add an employee', 
      'Update an employee role',
      'Quit'
    ],
  }
]

const department = [
  {
    type: 'input',
    name: 'department',
    message: 'Department name:'
  }
]

const role = [
  {
    type: 'input',
    name: 'title',
    message: 'Role title:'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'Role salary:'
  },
  {
    type: 'list',
    name: 'department',
    choices: async () => await getAllDepartments()
  }
]

const employee = [
  {
    type: 'input',
    name: 'first_name',
    message: 'Employee first name'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'Employee last name'
  },
  {
    type: 'list',
    name: 'role',
    choices: async () => await getAllRoles()
  },
  {
    type: 'list',
    name: 'manager',
    choices: async () => await getAllEmployees()
  }
]

const updateEmployee = [
  {
    type: 'list',
    name: 'employee',
    message: 'Select employee to update:',
    choices: async () => await getAllEmployees()
  },
  {
    type: 'list',
    'name': 'role',
    message: `Select employee's new role:`,
    choices: async () => await getAllRoles()
  }
]

export { department, role, employee, updateEmployee }