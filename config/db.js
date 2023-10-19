const mysql = require("mysql");
const env   = require("./env")
const fs    = require("fs")
const pool = mysql.createPool({
    database: env.CONFIG_DB.PPLICATION_DB ,
    host: env.CONFIG_DB.APPLICATION_HT ,
    port: env.CONFIG_DB.APPLICATION_PT ,
    user: env.CONFIG_DB.APPLICATION_US ,
    password: env.CONFIG_DB.APPLICATION_PS ,
    limit: 5
})

module.exports = {
    pool: pool ,
    /*


     */
}