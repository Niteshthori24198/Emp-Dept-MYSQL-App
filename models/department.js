

module.exports = (sequelize, datatype) => {

    const Department = sequelize.define("departments", {

        Did: {
            type: datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        Dname: {
            type: datatype.STRING,
            allowNull: false,
            unique: true
        },

        Location: {
            type: datatype.STRING,
            allowNull: false
        }

    })


    return Department

}