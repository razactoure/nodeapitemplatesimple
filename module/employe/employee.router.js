const {getEmployeeAll , getEmployeeById , createEmployee , updateEmployee } = require("./employee.controller")
const router = require("express").Router();

router.get('/', getEmployeeAll)
router.get('/:id', getEmployeeById)
router.post('/:id', createEmployee)
router.put('/:id', updateEmployee)

module.exports = router