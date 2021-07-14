const Express = require('express') //imports express dependency into the application

const app = Express() //Top level function allowing access to all of its methodss 

const dbConnection = require("./db")
const controllers = require("./controllers")

dbConnection.authenticate()
    .then(() => dbConnection.sync()) //.sync() syncs models or schemas to database
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server] is running on 3000`)
        })
    })
    .catch((err) => {
        console.log(`[Server] crashed ${err}`)
    })

app.use(Express.json())
app.use(controllers.piecontroller)
app.use("/user", controllers.usercontroller)
// app.use("/user", controllers.usercontroller)