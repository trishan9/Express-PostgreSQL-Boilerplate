const http = require("http")
require("dotenv").config()

const app = require("./src/app")
const sequelize = require("./src/utils/database")

const server = http.createServer(app)

sequelize.sync().then(() => {
    server.listen(process.env.PORT, () => {
        console.log("Server started running on port: ", process.env.PORT)
    })
})