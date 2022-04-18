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

export { departmentQuestion }