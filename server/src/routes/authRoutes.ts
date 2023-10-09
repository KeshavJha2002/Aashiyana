import express from "express";
import { signup } from "../controllers/authController";

const authRoute = express.Router(); 

authRoute.route('/sign-up')
  .post(signup)

export default authRoute;