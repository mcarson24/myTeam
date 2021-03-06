import employees_controller from './controllers/employees_controller.js'

const getAllDepartments = async () => {
  const departments = await employees_controller.viewAllDepartments()
  
  return departments.map(department => department.name)
}

const getAllRoles = async () => {
  const roles = await employees_controller.viewAllRoles()
  
  return roles.map(role => role.title)
}

// Sometimes we want to include a 'NONE' option for when employee's
// potentially may not have a manager.
const getAllEmployees = async (includeNone = true) => {
  const employees = await employees_controller.viewAllEmployees()
  if (includeNone) employees.unshift({ Name: 'NONE' })
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
      'Update an employee\'s manager',
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

const updateManager = [
  {
    type: 'list',
    name: 'employee',
    message: 'Select an employee:',   
    choices: async () => await getAllEmployees(false)
  },
  {
    type: 'list',
    name: 'manager',
    message: 'Select a manager:',
    choices: async answers => {
      const employees = await getAllEmployees()
      // Make sure the selected employee is not returned as a potential manager
      return employees.filter(employee => {
        if (employee !== answers.employee) return employee
      })
    }
  }
]

export { 
  role, 
  employee, 
  department, 
  updateManager,
  updateEmployee
}