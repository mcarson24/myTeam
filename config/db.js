import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('myTeam', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
})

export { sequelize }