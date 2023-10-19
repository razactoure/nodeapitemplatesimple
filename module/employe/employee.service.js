const toolDb = require("./../../config/db")

module.exports = {
    create: (req , callBack) => {
        toolDb.pool.query(
            `INSERT INTO employees (FIRSTNAME , LASTNAME,SALARY,POSITION,STATUS,CREATED) VALUES(?,? ,? , ?, 'enable',NOW())` , [req.firstname ,req.lastname , req.salary , req.position  ] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    } ,
    update: (req , id , callBack) => {
        toolDb.pool.query(
            `UPDATE  employees SET FIRSTNAME = ? ,  LASTNAME = ? ,  SALARY = ? , POSITION = ? WHERE ID = ?` , [req.firstname ,req.lastname , req.salary , req.position , id] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    } ,

    getById: (req, id , callBack) => {
        toolDb.pool.query(
            `SELECT * FROM employees   WHERE ID = ?` , [ id] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    },
    getAll: (req,  callBack) => {
        toolDb.pool.query(
            `SELECT * FROM employees  ` , [ ] , (error , results , fields) => {
                if(error) callBack(error, results)
                if(results && !error) callBack(null , results)
            }
        )
    }
}