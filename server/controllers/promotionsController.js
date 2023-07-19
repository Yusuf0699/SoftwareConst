const ItemPromotion = require('../models/promotionsModel');

const createItemPromotion = async (req, res) => {
  try {
    const { items, discount, startDate, endDate } = req.body;

    // Create a new item promotion
    const itemPromotion = new ItemPromotion({
      items,
      discount,
      startDate,
      endDate,
    });

    // Save the item promotion to the database
    await itemPromotion.save();

    res.status(201).json({ message: 'Item promotion created successfully', itemPromotion });
  } catch (error) {
    console.log('Failed to create item promotion', error);
    res.status(500).json({ error: 'Failed to create item promotion' });
  }
};


// const ItemPromotion = require('../models/promotionsModel');

// // Controller method to create a new item promotion
// const createItemPromotion = async (req, res) => {
//   try {
//     const { items, discount, startDate, endDate } = req.body;

//     // Create an array to store the item promotions
//     const itemPromotions = [];

//     // Iterate over the items and create item promotions for each item
//     for (const itemId of items) {
//       // Create a new item promotion
//       const itemPromotion = new ItemPromotion({
//         items: [itemId],
//         discount,
//         startDate,
//         endDate,
//       });

//       // Save the item promotion to the database
//       await itemPromotion.save();

//       itemPromotions.push(itemPromotion);
//     }

//     res.status(201).json({ message: 'Item promotions created successfully', itemPromotions });
//   } catch (error) {
//     console.log('Failed to create item promotions', error);
//     res.status(500).json({ error: 'Failed to create item promotions' });
//   }
// };

// Controller method to get all item promotions
const getAllItemPromotions = async (req, res) => {
  try {
    const itemPromotions = await ItemPromotion.find().populate('items'); // Assuming the 'items' field in the 'ItemPromotion' model references the 'Item' model
    res.json(itemPromotions);
  } catch (error) {
    console.log('Failed to retrieve item promotions', error);
    res.status(500).json({ error: 'Failed to retrieve item promotions' });
  }
};

module.exports = {
  createItemPromotion,
  getAllItemPromotions,
};