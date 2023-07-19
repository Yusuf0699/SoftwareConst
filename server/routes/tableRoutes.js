const express = require("express");
const router = express.Router();
const tableController = require("../controllers/tableController");

router.get("/", tableController.table_index);
router.post("/", tableController.table_create_post);
router.get("/:id", tableController.table_details);
router.patch("/:id", tableController.table_update);
router.delete("/:id", tableController.table_delete);

module.exports = router;
