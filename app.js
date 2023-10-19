const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const server  = express();
const env = require('./config/env')
const toolQuery = require('./config/db')

const options = {
    swaggerDefinition: {
        info: {
            title: "Manage aplication of employee",
            version: "1.0.0",
        },
    },
    apis: ["./src/router/*"],
};

const swaggerSpecification = swaggerJsdoc(options);

const routerApp = require("./router/index")

server.use(express.json())
server.use( env.CONFIG_APP.APPLICATION_DEFAULT_RACINE_PORT,routerApp)
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

module.exports =  {
    run:() => {
        server.listen(env.CONFIG_APP.APPLICATION_PORT , () => {
            console.log("************************************ WELCOME on "+ env.CONFIG_APP.APPLICATION_PORT + "***************************************************")
        })
    }
}