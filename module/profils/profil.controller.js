const {update,create, getAll, getById} = require("./profil.service")

module.exports = {
    createProfil: (request , response) => {
        create(request.body , (error , result ) => {
            if(error) return response.status(200).json({code_status: "0" , message: "profil has not created"})
            if(result) return response.status(200).json({code_status: "1" , message: "profil has created"})
        })
    } ,
    updateProfil:(request , response) => {
        update(request.body , request.params.id , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "profil has not updated"})
            if(result) return response.status(200).json({code_status: "1" , message: "profil has updated"})
        })
    } ,

    getProfilById: (request , response) => {
        getById(request.body , request.params.id , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "profil liste can not  get" , data: []})
            if(result) return response.status(200).json({code_status: "1" , message: "profil liste has   get" ,  data: [result]})
        })
    } ,
    getProfilAll: (request , response) => {
        getAll(request.body , (error , result) => {
            if(error) return response.status(200).json({code_status: "0" , message: "profil liste can not  get" , data: []})
            if(result) return response.status(200).json({code_status: "1" , message: "profil liste has   get" ,  data: [result]})
        })
    }
}