import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET_CODE } = process.env;

export const checkPermission = async (req, res, next) => {
  console.log(req.headers.authorization);
};
