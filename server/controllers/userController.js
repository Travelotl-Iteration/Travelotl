const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const userController = {};

userController.registerUser = async (req, res, next) => {
  console.log('request to register user', req.body);
  try {
    const { firstName, lastName, email, password } = req.body;

    // check that all fields have been provided
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ error: 'Please add all required fields' })
      return;
    }

    // check if user already exists
    const userExists = await User.findOne({email});

    // console.log(userExists);
    if (userExists) {
      res.status(400).json({ error: 'User already exists'});
      return;
    }

    // hash password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({firstName, lastName, email, password: hashedPassword});

    if (user) {
      res.locals.user = { _id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, token: generateToken(user._id) };
    } else {
      res.status(400).json({ error: 'Invalid user data'})
    }

    return next();

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error'});
  }
}

userController.loginUser = async (req, res, next) => {
  console.log('request to login user', req.body);
  const { email, password } = req.body;

  try {
    // check the user
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ error: 'User not found' });
    }
    // check the password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log('Incorrect credentials');
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    // return user object
    res.locals.user = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    };

    return next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// possibly not using this?
userController.getUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  try {
    res.status(200).json({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error'});
  }
  
}

// generate json web token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '1h'})
}

module.exports = userController;