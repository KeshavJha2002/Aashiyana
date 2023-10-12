import { Request, Response, NextFunction } from 'express';
import User from '../models/UserSchema';
import bcryptjs from 'bcryptjs';

interface UserInfo {
  username : String,
  email : String,
  password : String 
};

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password }:UserInfo = req.body;
  try {
    const hashedPassword = bcryptjs.hashSync(String(password), Number(10));
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(200).send('User created successfully');
  } catch (error) {
    console.log(error);
    next(error);
  }
};
