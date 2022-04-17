import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/db.js'

export default class Employee extends Model {
  getFullName() {
    return `${this.first_name} ${this.last_name}`
  }
}

Employee.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  role_id: {
    type: DataTypes.INTEGER
  },
  manager_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  timestamps: false
})
