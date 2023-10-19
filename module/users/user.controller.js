const {update,create, getAll, getById, updatePassword} = require("./user.service")

module.exports = {
    createUser: (request , response) => {
        create(request.body , (error , result ) => {
            if(error) return response.status(200).json({code_status: "0" , message: "user has not created"})
            if(result) return response.status(200).json({code_status: "1" , message: "user has created"})
        })
    } ,
    updateUser:(request , response) => {
        update(request.body , request.params.id , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "user has not updated"})
            if(result) return response.status(200).json({code_status: "1" , message: "user has updated"})
        })
    } ,
    changePassword:(request , response) => {
        updatePassword(request.body , request.params.id , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "password's user has not updated"})
            if(result) return response.status(200).json({code_status: "1" , message: "password's user has updated"})
        })
    } ,
    getUserbyId: (request , response) => {
        getById(request.body , request.params.id , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "user liste can not  get" , data: []})
            if(result) return response.status(200).json({code_status: "1" , message: "user liste has   get" ,  data: [result]})
        })
    } ,
    getUserAll: (request , response) => {
        getAll(request.body , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "user liste can not  get" , data: []})
            if(result) return response.status(200).json({code_status: "1" , message: "user liste has   get" ,  data: [result]})
        })
    }
}