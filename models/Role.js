import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/db.js'

export default class Role extends Model {}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  salary: {
    type: DataTypes.DECIMAL
  },
  department_id: {
    type: DataTypes.INTEGER,
    references: {
      modelName: 'Department',
      key: 'id'
    }
  }
}, {
  sequelize,
  timestamps: false
})