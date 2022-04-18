import inquirer from 'inquirer'
import { sequelize } from './config/db.js'
import { render, getData } from './helpers.js'
import questions, { 
  departmentQuestion, 
  employeeQuestion, 
  roleQuestion, 
  updateEmployeeQuestion 
} from './questions.js'

const askQuestions = () => {
  inquirer.prompt(questions)
    .then(async answers => {
      // The user wants to quit, close the connection and return.
      if (answers.choice === 'Quit') {
        sequelize.close()
        return
      } 
      // Get the desired data and re-prompt the user for the next choice.
      else {
        if (answers.choice === 'Add a department') {
          inquirer.prompt(departmentQuestion)
          .then(async answers => {
            await getData('Add a department', answers.department)
            askQuestions()
          })
        } else if (answers.choice === 'Add a role') {
          inquirer.prompt(roleQuestion)
          .then(async answers => {
            await getData('Add a role', answers)
            askQuestions()
          })
        } else if (answers.choice === 'Add an employee') {
          inquirer.prompt(employeeQuestion)
            .then(async answers => {
              await getData('Add an employee', answers)
              askQuestions()
            })
        } else if (answers.choice === 'Update an employee role') {
          inquirer.prompt(updateEmployeeQuestion)
            .then(async answers => {
              // DO STUFF
              getData('Update an employee role', answers)
              askQuestions()
            })
        } else {
          let data = await getData(answers.choice)
          render(data)
          askQuestions()
        }
      }
    })
}

askQuestions()
