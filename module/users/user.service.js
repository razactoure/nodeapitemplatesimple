const toolDb = require("./../../config/db")

module.exports = {
    create: (req , callBack) => {
        toolDb.pool.query(
            `INSERT INTO users (USERNAME ,LOGIN , PASSWORD , TOKEN , PROFIL_ID , STATUS , CREATED) VALUES(?,?,?,? ,?, 'enable' , NOW())` , [req.username , req.login , req.password , req.token , req.profil] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    } ,
    update: (req , id , callBack) => {
        toolDb.pool.query(
            `UPDATE  users SET USERNAME = ? LOGIN = ? , PROFIL_ID = ? WHERE ID = ?` , [req.username , req.login ,  req.profil , id] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    } ,
    updatePassword: (req , id , callBack) => {
        toolDb.pool.query(
            `UPDATE  users SET PASSWORD = ?  WHERE ID = ?` , [req.password , id] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    } ,
    getById: (req, id , callBack) => {
        toolDb.pool.query(
            `SELECT users.USERNAME ,users.LOGIN , users.PROFIL_ID  ,  profiles.LABEL FROM users JOIN profiles ON users.PROFIL_ID = profiles.ID   WHERE ID = ?` , [ id] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    },
    getAll: (req,  callBack) => {
        toolDb.pool.query(
            `SELECT users.USERNAME ,users.LOGIN , users.PROFIL_ID  ,  profiles.LABEL FROM users JOIN profiles ON users.PROFIL_ID = profiles.ID  ` , [ ] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    }
}