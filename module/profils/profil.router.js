const {getProfilAll , getProfilById , createProfil , updateProfil } = require("./profil.controller")
const router = require("express").Router();

router.get('/', getProfilAll)
router.get('/:id', getProfilById)
router.post('/:id', createProfil)
router.put('/:id', updateProfil)

module.exports = router