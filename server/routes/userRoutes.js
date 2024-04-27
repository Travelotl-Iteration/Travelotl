const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/auth_controller');
const cookieController = require('../controllers/cookie_controller.js');

// register and login user
router.post('/', 
  userController.registerUser,
  userController.loginUser,
  cookieController.setCookie,
  (req, res) => res.status(200).json(res.locals.user)
);

// login existing user
router.post('/login', 
  userController.loginUser,
  cookieController.setCookie,
  (req, res) => res.status(200).json(res.locals.user)
);

// possibly not using this route?
router.get('/user', authController.protect, userController.getUser);

// logout clears the user's cookie
router.get('/logout',
  (req, res) => res.status(200).clearCookie('jwt').json('Successfully logged out')
)



module.exports = router;