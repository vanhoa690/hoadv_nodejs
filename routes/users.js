import express from 'express';
import usersController from '../controllers/UsersController';
import { checkPermission } from '../middlewares/checkPermission';

const routerUsers = express.Router();

routerUsers.get('/:id', usersController.getUserDetail);
routerUsers.get('/', usersController.getAllUsers);
routerUsers.post('/login', usersController.loginUser);
routerUsers.post('/', usersController.createUser);
routerUsers.delete('/:id', checkPermission, usersController.deleleUser);

export default routerUsers;
