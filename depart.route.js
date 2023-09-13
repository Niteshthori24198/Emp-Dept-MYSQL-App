
const { Router } = require('express');
const { employes, departments } = require('./models/index');

const deptRouter = Router()


deptRouter.post("/", async (req, res) => {


    const { Dname, Location } = req.body;

    try {

        const data = await departments.create({ Dname, Location });
        res.send({ data })

    } catch (error) {
        console.log(error.message)
    }

})



deptRouter.get("/", async (req, res) => {
    try {

        departments.hasMany(employes, { foreignKey: "DeptId" })
        employes.belongsTo(departments, { foreignKey: "DeptId" })

        const data = await departments.findAll({
            include: [employes]
        })

        res.send({ data })

    } catch (error) {
        console.log(error.message)

    }
})




deptRouter.delete("/:id", async (req, res) => {
    try {

        await employes.destroy({
            where: {
                DeptId: req.params.id
            }
        })

        const data = await departments.destroy({
            where: {
                Did: req.params.id
            }
        })

        res.send({ data })

    } catch (error) {
        console.log(error.message)
    }
})




deptRouter.patch("/:id", async (req, res) => {


    try {

        const data = await departments.update({ ...req.body }, {
            where: {
                Did: req.params.id
            }
        })

        res.send({ data })

    } catch (error) {
        console.log(error.message)

    }

})



module.exports = deptRouter