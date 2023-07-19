const Item = require("../models/itemModel");
const multer = require("multer");
const fs = require("fs");


// const item_index = (req, res) => {
// 	Item.find(function (err, items) {
// 		res.json(items);
// 	});
// };


const item_index = (req, res) => {
	Item.find(function (err, items) {
	  if (err) {
		res.status(500).send("Error retrieving items");
	  } else {
		// Map through each item to add image URL
		const itemsWithImages = items.map((item) => {
		  return {
			...item._doc,
			image: {
			  data: item.image.data.toString("base64"), // Convert image data to base64 string
			  contentType: item.image.contentType, // Get the file MIME type
			},
		  };
		});
		res.json(itemsWithImages);
	  }
	});
  };
// const item_index = (req, res) => {
// 	Item.find(function (err, items) {
// 	  if (err) {
// 		res.status(500).send("Error retrieving items");
// 	  } else {
// 		// Map through each item to add image URL
// 		const itemsWithImages = items.map((item) => {
// 		  console.log(item.image.data); // Log the image data to check its value
// 		  return {
// 			...item._doc,
// 			image: item.image.data ? item.image.data.toString("base64") : "", // Check if image data exists before converting to base64 string
// 		  };
// 		});
// 		res.json(itemsWithImages);
// 	  }
// 	});
//   };

// Create New item
// const item_create_post = (req, res) => {
// 	let item = new Item(req.body);
// 	item
// 	.save()
// 	.then((item) => {
// 		res.send(item);
// 	})
// 		.catch(function (err) {
// 			res.status(422).send("Item adding failed");
// 		});
// };

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Customize the image filename
  },
});

const upload = multer({ storage: storage }).single("image"); // Specify the field name for the image

// Create New item
const item_create_post = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred during file upload
      return res.status(500).json({ error: "Image upload error" });
    } else if (err) {
      // An unknown error occurred during file upload
      return res.status(500).json({ error: "Unknown error occurred" });
    }

    // File upload success, create the item
    const item = new Item({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      image: {
        data: fs.readFileSync(req.file.path), // Read the image file
        contentType: req.file.mimetype, // Get the file MIME type
      },
    });

    item
      .save()
      .then((item) => {
        res.send(item);
      })
      .catch((err) => {
        res.status(422).send("Item adding failed");
      });
  });
};





// Show a particular Item Detail by Id
const item_details = (req, res) => {
	Item.findById(req.params.id, function (err, item) {
		if (!item) {
			res.status(404).send("No result found");
		} else {
			res.json(item);
		}
	});
};

// Update item Detail by Id
// const item_update = (req, res) => {
// 	Item.findByIdAndUpdate(req.params.id, req.body)
// 		.then(function () {
// 			res.json("Item updated");
// 		})
// 		.catch(function (err) {
// 			res.status(422).send("Item update failed.");
// 		});
// };

const item_update = (req, res) => {
	upload(req, res, function (err) {
	  if (err instanceof multer.MulterError) {
		// A Multer error occurred during file upload
		return res.status(500).json({ error: "Image upload error" });
	  } else if (err) {
		// An unknown error occurred during file upload
		return res.status(500).json({ error: "Unknown error occurred" });
	  }
  
	  // File upload success, update the item details
	  const itemId = req.params.id;
  
	  // Prepare the updated item details
	  const updatedItem = {
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		quantity: req.body.quantity,
	  };
  
	  // Check if a new image was uploaded
	  if (req.file) {
		// Update the item with the new image
		updatedItem.image = {
		  data: fs.readFileSync(req.file.path),
		  contentType: req.file.mimetype,
		};
	  }
  
	  // Find the item by ID and update it
	  Item.findByIdAndUpdate(itemId, updatedItem)
		.then(() => {
		  res.json("Item updated");
		})
		.catch((err) => {
		  res.status(422).send("Item update failed.");
		});
	});
  };








// Delete Item Detail by Id
const item_delete = (req, res) => {
	Item.findById(req.params.id, function (err, item) {
		if (!item) {
			res.status(404).send("Item not found");
		} else {
			Item.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Item deleted");
				})
				.catch(function (err) {
					res.status(400).send("Item delete failed.");
				});
		}
	});
};

module.exports = {
	item_index,
	item_details,
	item_create_post,
	item_update,
	item_delete,
};