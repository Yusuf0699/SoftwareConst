const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");
const { loginStaff, signupStaff } = require('../controllers/staffController')

router.get("/", staffController.staff_index);
router.post("/", staffController.staff_create_post);
router.get("/:id", staffController.staff_details);
router.patch("/:id", staffController.staff_update);
router.delete("/:id", staffController.staff_delete);
router.post('/login', loginStaff)
router.post('/signup', signupStaff)

module.exports = router;
