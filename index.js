const express = require('express')

const app = express()

app.use(express.json())

const db = require('./models/index')


const empRouter = require('./employe.route')

const deptRouter = require('./depart.route')



app.get('/', (req, res) => {
    return res.send({
        "msg": "Welcome to Backend Server !"
    })
})



app.use("/emp", empRouter)

app.use("/dept", deptRouter)




// connect to db


db.sequelize.sync().then(() => {

    try {

        app.listen(6969, () => {

            console.log('Server running at 6969')

        })

    } catch (error) {
        console.log(error.message)
    }
})

