const dotenv = require("dotenv").configDotenv().parsed

module.exports = {
    CONFIG_DB: {
        PPLICATION_DB: dotenv.APPLICATION_DB ,
        APPLICATION_US: dotenv.APPLICATION_US ,
        APPLICATION_PS: dotenv.APPLICATION_PS ,
        APPLICATION_PT: dotenv.APPLICATION_PT ,
        APPLICATION_HT: dotenv.APPLICATION_HT ,
    } ,
    CONFIG_APP: {
        APPLICATION_PORT: dotenv.APPLICATION_PORT ,
        APPLICATION_NAME: dotenv.APPLICATION_NAME ,
        APPLICATION_DEFAULT_RACINE_PORT: dotenv.APPLICATION_DEFAULT_RACINE_PORT ,
        APPLICATION_ENV: dotenv.APPLICATION_ENV ,
    }
}