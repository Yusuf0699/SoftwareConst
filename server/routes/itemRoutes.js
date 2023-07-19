const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/", itemController.item_index);
router.post("/", itemController.item_create_post);
router.get("/:id", itemController.item_details);
router.patch("/:id", itemController.item_update);
router.delete("/:id", itemController.item_delete);
module.exports = router;
