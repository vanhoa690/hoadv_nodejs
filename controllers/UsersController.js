const User = require('../models/UserModel');

class UsersController {
  // [GET] /users
  async getAllUsers(req, res) {
    try {
      const products = await User.find();
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

 
}

module.exports = new UsersController();
