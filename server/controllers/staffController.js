const Staff = require("../models/staffModel");
const jwt = require('jsonwebtoken')

// Display All staff Data
const staff_index = (req, res) => {
	Staff.find(function (err, staffs) {
		res.json(staffs);
	});
};

// Create New staff
const staff_create_post = (req, res) => {
	let staff = new Staff(req.body);
	staff
		.save()
		.then((staff) => {
			res.send(staff);
		})
		.catch(function (err) {
			res.status(422).send("Staff add failed");
		});
};

// Show a particular Staff Detail by Id
const staff_details = (req, res) => {
	Staff.findById(req.params.id, function (err, staff) {
		if (!staff) {
			res.status(404).send("No result found");
		} else {
			res.json(staff);
		}
	});
};

// Update staff Detail by Id
const staff_update = (req, res) => {
	Staff.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("Staff updated");
		})
		.catch(function (err) {
			res.status(422).send("Staff update failed.");
		});
};
const createToken = (_id) => {
	return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
  }
  // login a staff
  const loginStaff = async (req, res) => {
	const {email, password} = req.body
  
	try {

	  const staff = await Staff.login(email, password)
  
	  // create a token
	  const token = createToken(staff._id)
		const namee = staff.name
	  res.status(200).json({email, token , namee})
	} catch (error) {
	  res.status(400).json({error: error.message})
	}
  }

  
  // signup a staff
  const signupStaff = async (req, res) => {
	const { name, email, password } = req.body
  
	try {
	  const staff = await Staff.signup( name, email, password )
	  // create a token
	  const token = createToken(staff._id)
  const namee = staff.name
	  res.status(200).json({email, token ,namee })
	} catch (error) {
	  res.status(400).json({error: error.message})
	}
  }
// Delete Staff Detail by Id
const staff_delete = (req, res) => {
	Staff.findById(req.params.id, function (err, staff) {
		if (!staff) {
			res.status(404).send("Staff not found");
		} else {
			Staff.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Staff deleted");
				})
				.catch(function (err) {
					res.status(400).send("Staff delete failed.");
				});
		}
	});
};

module.exports = {
	staff_index,
	staff_details,
	staff_create_post,
	staff_update,
	staff_delete,
	loginStaff,
	signupStaff,

};
