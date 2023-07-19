const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a admin
const loginAdmin = async (req, res) => {
  const {email, password } = req.body

  try {
    const admin = await Admin.login(email, password)
    // create a token
    const token = createToken(admin._id)
    const anamee = admin.aname
    res.status(200).json({email, token ,anamee})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
// signup a admin
const signupAdmin = async (req, res) => {
  const {aname ,email, password } = req.body
  try {
    const admin = await Admin.signup(aname, email, password)
    const token = createToken(admin._id)
    const anamee = admin.aname
    res.status(200).json({email, token, anamee})
  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

const admin_details = (req, res) => {
	Admin.findById(req.params.id, function (err, admin) {
		if (!admin) {
			res.status(404).send("No result found");
		} else {
			res.json(admin);
		}
	});
};

const admin_index = (req, res) => {
	Admin.find(function (err, admins) {
		res.json(admins);
	});
};




module.exports = { signupAdmin, loginAdmin , admin_details ,admin_index ,}