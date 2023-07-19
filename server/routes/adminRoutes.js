const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { loginAdmin, signupAdmin } = require('../controllers/adminController')

router.post('/login', loginAdmin)
router.post('/signup', signupAdmin)

router.get("/:id", adminController.admin_details);
router.get("/", adminController.admin_index);
module.exports = router