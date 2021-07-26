/**
 * @typedef User
 * @property {[string]} fullName
 * @property {[string]} email
 * @property {[string]} phoneNumber
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            require : true

        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            require : true
        },
        email: {
            type: DataTypes.STRING,
            require: true,
            unique : true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            require: true,
            allowNull: false

        }}, {
        indexes: [
            {
                unique: true,
                fields: ['email']
            }]
    })
};
