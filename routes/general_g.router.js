const express = require("express")
const router = express.Router()

const postsController = require("../controller/general_g.controller")

router.get("/", postsController.getAll)
router.get("/:id", postsController.getById)

module.exports = router