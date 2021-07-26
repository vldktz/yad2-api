/**
 * @typedef OfferType
 * @property {[string]} name
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('OfferType', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
    })
};
