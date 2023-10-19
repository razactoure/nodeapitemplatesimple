const {update,create, getAll, getById} = require("./employee.service")

module.exports = {
    createEmployee: (request , response) => {
        create(request.body , (error , result ) => {
            if(error) return response.status(200).json({code_status: "0" , message: "employee has not created"})
            if(result) return response.status(200).json({code_status: "1" , message: "employee has created"})
        })
    } ,
    updateEmployee:(request , response) => {
        update(request.body , request.params.id , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "employee has not updated"})
            if(result) return response.status(200).json({code_status: "1" , message: "employee has updated"})
        })
    } ,

    getEmployeeById: (request , response) => {
        getById(request.body , request.params.id , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "employee liste can not  get" , data: []})
            if(result) return response.status(200).json({code_status: "1" , message: "employee liste has   get" ,  data: [result]})
        })
    } ,
    getEmployeeAll: (request , response) => {
        getAll(request.body , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "employee liste can not  get" , data: []})
            if(result) return response.status(200).json({code_status: "1" , message: "employee liste has   get" ,  data: [result]})
        })
    }
}