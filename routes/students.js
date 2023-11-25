const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/StudentsController')
const { checkPermissionStudent } = require('../middlewares/checkPermission');

router.get('/products', checkPermissionStudent, studentsController.getProductsByStudent)
router.get('/products/:id', checkPermissionStudent, studentsController.getProductDetailByStudent)
router.delete('/products/:id', checkPermissionStudent, studentsController.deleleProductByStudent)
router.put('/products/:id', checkPermissionStudent, studentsController.updateProductByStudent)

router.get('/:id', studentsController.getStudentDetail)
router.get('/', studentsController.getAllStudents)
router.delete('/:id', studentsController.deleleStudent)

module.exports = router;