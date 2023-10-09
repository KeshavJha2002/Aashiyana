import express,{NextFunction, Request,Response} from 'express';
import User from '../models/UserSchema'
import bcryptjs from 'bcryptjs';

export const signup = async(req:Request,res:Response,next:NextFunction) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser = new User({username, email, hashedPassword});
  try{
    await newUser.save();
    res.status(200).send("User created successfully");
  }catch(e:any) {
    next(e);
  }
}