const sequelize = require('../db')

const { DataTypes } = require('sequelize')

const SPK = sequelize.define('spk', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Managers = sequelize.define('managers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_manager: {type: DataTypes.STRING},
    second_manager: {type: DataTypes.STRING}
})

const Folder = sequelize.define('folder', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

SPK.hasMany(Folder)
Folder.belongsTo(SPK)

Folder.hasMany(Managers)
Managers.belongsTo(Folder)

module.exports = {
    SPK,
    Managers,
    Folder
}