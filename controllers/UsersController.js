const User = require('../models/UserModel');
const bcryptjs = require('bcryptjs');

class UsersController {
  // [GET] /users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [POST] /users
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const hashPassword = await bcryptjs.hash(password, 10);
      await User.create({
        username,
        email,
        password: hashPassword,
      });
      res.status(200).json({ message: 'Add user successfull' });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }
}

module.exports = new UsersController();
