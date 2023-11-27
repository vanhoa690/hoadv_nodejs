const Student = require('../models/StudentModel');

class StudentsController {

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
