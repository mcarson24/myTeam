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
    choices: ['Electronics', 'Fulfillment', 'Inbound']
  }
]

export { departmentQuestion, roleQuestion }