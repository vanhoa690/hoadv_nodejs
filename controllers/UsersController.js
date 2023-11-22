import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { createUserValidator } from '../validations/user';
import User from '../models/UserModel';

dotenv.config();

const { SECRET_CODE } = process.env;

class UsersController {
  // [GET] /users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [GET] /users/:id
  async getUserDetail(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [POST] /users
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      // Bước 1: Kiểm tra dữ liệu người dùng
      const { error } = createUserValidator.validate(req.body);
      console.log(error);
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          messages: errors,
        });
      }
      // Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({
          message: 'Email này đã được đăng ký',
        });
      }

      // Bước 3: Mã hoá mật khẩu
      const hashPassword = await bcryptjs.hash(password, 10);
      await User.create({
        username,
        email,
        password: hashPassword,
      });
      res.status(200).json({ message: 'Add user successfull' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [POST] /users/login
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      // Bước 1: Validate email
      const { error } = createUserValidator.validate(req.body);
      console.log(error);
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          messages: errors,
        });
      }
      // Bước 2: Kiểm tra xem email có trong db hay không?
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: 'Email này chưa đăng ký, bạn có muốn đăng ký không?',
        });
      }

      // Bước 3: Kiểm tra password
      const isMatch = bcryptjs.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: 'Email or Password không đúng, vui lòng kiểm tra lại!',
        });
      }

      // Bước 4: Tạo ra token
      const token = jwt.sign({ _id: user._id }, SECRET_CODE, {
        expiresIn: '1d',
      });

      res.json({
        message: 'Login successfull',
        token,
        user: {
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [DELETE] /users/:id
  async deleleUser(req, res) {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Delete User Successful' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new UsersController();
