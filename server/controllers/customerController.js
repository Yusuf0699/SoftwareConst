const Customer = require('../models/customerModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a customer
const loginCustomer = async (req, res) => {
  const {email, password} = req.body
  try {
    const customer = await Customer.login(email, password)

    // create a token
    const token = createToken(customer._id)
	const idc = customer._id
	const namee = customer.name
	const rewards = customer.rewardPoints
    res.status(200).json({email, token ,idc,namee,rewards })
  } catch (error) {
    res.status(400).json({error: error.message})
	
  }
}
// signup a customer
const signupCustomer = async (req, res) => {
  const {name, email, password} = req.body
  try {
    const customer = await Customer.signup( name,email, password)
    // create a token
    const token = createToken(customer._id)
	const idc = customer._id
	const namee = customer.name
	const rewards = customer.rewardPoints
    res.status(200).json({email, token ,idc,namee,rewards })
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
// Create New customer
const customer_create_post = (req, res) => {
	let customer = new Customer(req.body);
	customer
		.save()
		.then((customer) => {
			res.send(customer);
		})
		.catch(function (err) {
			res.status(422).send("Customer add failed");
		});
};



// Show a particular Customer Detail by Id
const customer_details = (req, res) => {
	Customer.findById(req.params.id, function (err, customer) {
		if (!customer) {
			res.status(404).send("No result found");
		} else {
			res.json(customer);
		}
	});
};



// Update customer Detail by Id
const customer_update = (req, res) => {
	Customer.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json(" Customer Info Updated ");
		})
		.catch(function (err) {
			res.status(422).send("Customer Info  Failed to be Updated.");
		});
};

const customer_index = (req, res) => {
	Customer.find(function (err, customers) {
		res.json(customers);
	});
};



// Delete Customer Detail by Id
const customer_delete = (req, res) => {
	Customer.findById(req.params.id, function (err, customer) {
		if (!customer) {
			res.status(404).send("Customer not found");
		} else {
			Customer.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Customer deleted");
				})
				.catch(function (err) {
					res.status(400).send("Customer delete failed.");
				});
		}
	});
};



module.exports = { 
  signupCustomer, 
  loginCustomer ,
	customer_details,
	customer_update,
  customer_index,
  customer_delete,
  customer_create_post,
}
