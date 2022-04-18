import employees_controller from './controllers/employees_controller.js'

const getAllDepartments = async () => {
  const departments = await employees_controller.viewAllDepartments()
  
  return departments.map(department => department.name)
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

const departmentQuestion = [
  {
    type: 'input',
    name: 'department',
    message: 'Department name:'
  }
]

const roleQuestion = [
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

export { departmentQuestion, roleQuestion }