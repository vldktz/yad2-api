/**
 * @typedef Offer
 * @property {[integer]} userType
 * @property {[integer]} userID
 * @property {[string]} answer
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Offer', {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true
        },
        title: {
            type: DataTypes.CHAR(200),
            allowNull: false,
            required: true
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        offerType : {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            require : true
        },
        email: {
            type: DataTypes.STRING,
            require: true,
            allowNull: false
        },
        indexes: [
            {
                unique: true,
                fields: ['userID']
            }]
    })
};
