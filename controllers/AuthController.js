const Student = require('../models/StudentModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { registerValidator, loginValidator } = require('../validations/student');

dotenv.config();

const { SECRET_CODE } = process.env;

class AuthController {
  async registerStudent(req, res) {
    try {
      const { fullname, email, password } = req.body;
      // * Bước 1: Validation values
      const { error } = registerValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({ messages: errors });
      }
      // Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
      const studentExist = await Student.findOne({ email });
      if (studentExist) {
        return res.status(400).json({
          message: 'Email này đã được đăng ký',
        });
      }

      // Bước 3: Mã hoá mật khẩu
      const hashPassword = await bcryptjs.hash(password, 10);
      await Student.create({
        fullname,
        email,
        password: hashPassword,
      });
      res.status(200).json({ message: 'Add student successfull' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [POST] /students/login
  async loginStudent(req, res) {
    try {
      const { email, password } = req.body;
      // Bước 1: Validate email
      const { error } = loginValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({ messages: errors });
      }
      // Bước 2: Kiểm tra xem email có trong db hay không?
      const student = await Student.findOne({ email });
      if (!student) {
        return res.status(404).json({
          message: 'Email này chưa đăng ký, bạn có muốn đăng ký không?',
        });
      }

      // Bước 3: Kiểm tra password
      const isMatch = await bcryptjs.compare(password, student.password);
      if (!isMatch) {
        return res.status(400).json({
          message: 'Email or Password không đúng, vui lòng kiểm tra lại!',
        });
      }

      // Bước 4: Tạo ra token
      const token = jwt.sign({ _id: student._id }, SECRET_CODE, {
        expiresIn: '1d',
      });

      res.json({
        message: 'Login successfull',
        token,
        student: {
          fullname: student.fullname,
          email: student.email,
        },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}

module.exports = new AuthController();
