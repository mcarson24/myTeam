import 'console.table'
import inquirer from 'inquirer'
import { getData } from './helpers.js'
import { sequelize } from './config/db.js'

import questions, { 
  role, 
  employee, 
  department, 
  updateManager,
  updateEmployee 
} from './questions.js'

// These choices have secondary prompts and return no data.
const prompts = {
  'Add a department': department,
  'Add a role': role,
  'Add an employee': employee,
  'Update an employee role': updateEmployee,
  'Update an employee\'s manager': updateManager
}

const askQuestions = () => {
  inquirer.prompt(questions)
    .then(async answers => {
      // The user wants to quit, close the connection and return.
      if (answers.choice === 'Quit') {
        sequelize.close()
        return
      } 
      // Otherwise, get the desired data and re-prompt the user for the next choice.
      const choice = answers.choice
      if (Object.keys(prompts).includes(choice)) {
        inquirer.prompt(prompts[choice])
          .then(async answers => {
            await getData(choice, answers)
            askQuestions()
          })
      } 
      // Other prompts have no seconday prompts, but do return data.
      else {
        let data = await getData(choice)
        console.table(data)
        askQuestions()
      }
    })
}

askQuestions()
