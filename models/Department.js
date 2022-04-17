import { DataTypes, Model } from 'sequelize'
import { sequelize  } from '../config/db.js'

class Department extends Model {}

Department.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  timestamps: false
})
export default Department