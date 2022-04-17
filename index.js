import inquirer from 'inquirer'
import questions from './questions.js'

import { render } from './helpers.js'

inquirer.prompt(questions)
  .then(async answers => {
    const results = await render(answers.choice)
    console.log(results)
  })