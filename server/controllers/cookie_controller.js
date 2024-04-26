const cookieParser = require('cookie-parser');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('jwt', res.locals.user.token, {
    expiresIn: 3600000
  });
  return next();
}

module.exports = cookieController;