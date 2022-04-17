import Role from './Role.js'
import Department from './Department.js'
import Employee from './Employee.js'

// Associations for Roles
Role.belongsTo(Department, { foreignKey: 'department_id', as: 'department' })
Role.hasMany(Employee, { foreignKey: 'role_id' })

// Associations for Departments
Department.hasMany(Role, { foreignKey: 'department_id' })

// Associations for Employees
Employee.belongsTo(Role, { foreignKey: 'role_id', as: 'role' })
Employee.hasMany(Employee, { foreignKey: 'manager_id' })
Employee.belongsTo(Employee, { foreignKey: 'manager_id', as: 'manager' })

export { Role, Department, Employee }