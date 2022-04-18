import 'console.table'
import employees_controller from './controllers/employees_controller.js'

const camelCase = string => {
  return string.split(' ').map((word, i) => {
    if (i === 0) return word.toLowerCase()
    return word[0].toUpperCase() + word.substring(1)
  }).join('')
}

const render = data => {
  return console.table(data)
}

const getData = (choice, arg) => {
  return {
    'viewAllDepartments': () => employees_controller.viewAllDepartments(),
    'viewAllRoles': () => employees_controller.viewAllRoles(),
    'viewAllEmployees': () => employees_controller.viewAllEmployees(),
    'addADepartment': arg => employees_controller.addADepartment(arg),
    'addARole': arg => employees_controller.addARole(arg),
    'addAnEmployee': arg => employees_controller.addAnEmployee(arg),
    // 'updateAnEmployeeRole': () => employees_controller.updateAnEmployeeRole(),
  }[camelCase(choice)](arg)
}

export { render, getData }