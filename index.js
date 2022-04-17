import inquirer from 'inquirer'
import questions from './questions.js'
import { sequelize } from './config/db.js'
import { render, getData } from './helpers.js'

inquirer.prompt(questions)
  .then(async answers => {
    const data = await getData(answers.choice)
    render(data)
    sequelize.close()
  })