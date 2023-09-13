
const {Router} = require('express')

const empRouter = Router()


const { employes, departments } = require('./models/index');


empRouter.post("/", async (req, res) => {


    try {

        const data = await employes.create({ ...req.body});
        res.send({ data })

    } catch (error) {
        console.log(error.message)
    }

})



empRouter.get("/", async (req, res) => {
    try {

        departments.hasMany(employes, { foreignKey: "DeptId" })
        employes.belongsTo(departments, { foreignKey: "DeptId" })

        const data = await employes.findAll({
            include: [departments]
        })

        res.send({ data })

    } catch (error) {
        console.log(error.message)

    }
})




empRouter.delete("/:id", async (req, res) => {
    try {

       const data = await employes.destroy({
            where: {
                Eid: req.params.id
            }
        })

        res.send({ data })

    } catch (error) {
        console.log(error.message)
    }
})




empRouter.patch("/:id", async (req, res) => {


    try {

        const data = await employes.update({ ...req.body }, {
            where: {
                Eid: req.params.id
            }
        })

        res.send({ data })

    } catch (error) {
        console.log(error.message)

    }

})



module.exports = empRouter;