import { Request, Response, NextFunction } from 'express';
import User from '../models/UserSchema';
import bcryptjs from 'bcryptjs';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    await newUser.validate();
  } catch (error:any) {
    return res.status(400).json({ error: error.message });
  }
  const hashedPassword = bcryptjs.hashSync(String(password), Number(10));
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(200).send('User created successfully');
  } catch (error) {
    console.log(error);
    next(error);
  }
};
