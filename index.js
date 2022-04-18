import inquirer from 'inquirer'
import questions, { departmentQuestion } from './questions.js'
import { sequelize } from './config/db.js'
import { render, getData } from './helpers.js'

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
        } else {
          let data = await getData(answers.choice)
          render(data)
          askQuestions()
        }
      }
    })
}

askQuestions()
