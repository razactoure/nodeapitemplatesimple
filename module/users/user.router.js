const {getUserAll , getUserbyId , createUser , updateUser , changePassword} = require("./user.controller")
const router = require("express").Router();

router.get('/', getUserAll)
router.get('/:id', getUserbyId)
router.post('/:id', createUser)
router.put('/:id', updateUser)
router.put('/oass/:id', changePassword)

module.exports = router