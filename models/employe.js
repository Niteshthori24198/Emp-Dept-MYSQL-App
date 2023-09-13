
module.exports = (sequelize, datatype) => {

    const Employe = sequelize.define("employes", {

        Eid: {
            type: datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        Name: {
            type: datatype.STRING,
            allowNull: false
        },

        Email: {
            type: datatype.STRING,
            allowNull: false,
            unique: true
        },
        
        Salary:{
            type:datatype.INTEGER,
            allowNull:false,
            defaultValue:1000
        }
        ,

        DeptId: {
            type: datatype.INTEGER,
            references: {
                key: "Did",
                model: "departments"
            }
        }


    })

    return Employe

}