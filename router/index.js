const router = require("express").Router();
const userModule = require("./../module/users/user.router")
const profileModule = require("./../module/profils/profil.router")
const employeeModule = require("./../module/profils/profil.router")

/**
 * Router application
 */

router.use("/user",userModule)
router.use("/profil",profileModule)
router.use("/employee",employeeModule)

module.exports = router