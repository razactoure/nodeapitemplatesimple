const toolDb = require("./../../config/db")

module.exports = {
    create: (req , callBack) => {
        toolDb.pool.query(
            `INSERT INTO profiles (LABEL , STATUS , CREATED) VALUES(?,'enable',NOW())` , [req.label ] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    } ,
    update: (req , id , callBack) => {
        toolDb.pool.query(
            `UPDATE  profiles SET LABEL = ?  WHERE ID = ?` , [req.label , id] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    } ,

    getById: (req, id , callBack) => {
        toolDb.pool.query(
            `SELECT * FROM profiles   WHERE ID = ?` , [ id] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    },
    getAll: (req,  callBack) => {
        toolDb.pool.query(
            `SELECT * FROM profiles  ` , [ ] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    }
}