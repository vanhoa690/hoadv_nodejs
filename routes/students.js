const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/StudentsController')

router.get('/:id', studentsController.getStudentDetail)
router.get('/', studentsController.getAllStudents)
router.delete('/:id', studentsController.deleleStudent)

module.exports = router;