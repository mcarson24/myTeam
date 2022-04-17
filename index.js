import inquirer from 'inquirer'
import questions from './questions.js'
import { sequelize } from './config/db.js'
import { render } from './helpers.js'

inquirer.prompt(questions)
  .then(async answers => {
    await render(answers.choice)
  })