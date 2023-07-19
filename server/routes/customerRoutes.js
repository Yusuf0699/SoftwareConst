const express = require('express')

const   customerController =  require ('../controllers/customerController')

const { loginCustomer, signupCustomer } = require('../controllers/customerController')
const router = express.Router()

router.post('/login', loginCustomer)
router.post('/signup', signupCustomer)
router.post("/", customerController.customer_create_post);
router.delete("/:id", customerController.customer_delete);
router.get("/:id", customerController.customer_details);
router.patch("/:id", customerController.customer_update); 
router.get("/", customerController.customer_index);
module.exports = router
