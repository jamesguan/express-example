const { Sequelize, DataTypes, Model } = require('sequelize');
const { connection } = require('./connection');

class Dog extends Model {};

Dog.init({
    dogName: {
        type: DataTypes.STRING(255),
    },
},
{
    sequelize: connection,
    modelName: 'dog',
},
);

module.exports = Dog;
