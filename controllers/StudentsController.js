const Student = require('../models/StudentModel');
const Product = require('../models/ProductModel');

class StudentsController {
  // [GET] /students/products
  async getProductsByStudent(req, res) {
    try {
      const products = await Product.find({ student: res.locals.student._id })
      // .populate('student')

      res.json(products)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [GET] /students/products/:id
  async getProductDetailByStudent(req, res) {
    try {
      const product = await Product.findOne({ _id: req.params.id, student: res.locals.student._id })
      // if(product.student)

      res.json(product)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [PUT] /students/products/:id
  async updateProductByStudent(req, res) {
    try {
      await Product.updateOne({ _id: req.params.id, student: res.locals.student._id }, req.body);
      res.status(200).json({ message: 'Update Product Successful' });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }


  // [DELETE] /students//products/:id
  async deleleProductByStudent(req, res) {
    try {
      await Student.deleteOne({ _id: req.params.id, student: res.locals.student._id })
      res.status(200).json({ message: 'Delete Product Successful' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [GET] /students
  async getAllStudents(req, res) {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [GET] /students/:id
  async getStudentDetail(req, res) {
    try {
      const student = await Student.findById(req.params.id);
      res.json(student);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [DELETE] /students/:id
  async deleleStudent(req, res) {
    try {
      await Student.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Delete Student Successful' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new StudentsController();
