const express = require('express');
const router = express.Router();
const promotionsController = require('../controllers/promotionsController');
// Route to create a new item promotion
router.post('/promos', promotionsController.createItemPromotion);
// Route to get all item promotions
router.get('/viewpromos', promotionsController.getAllItemPromotions);

module.exports = router;