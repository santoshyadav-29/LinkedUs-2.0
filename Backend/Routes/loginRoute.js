import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";

// //DB
import DB from '../config/DB.js'

// //schema
import Login from "../models/userSchema.js";



//login checking

router.post("/", async (req, res) => {
  try {
    console.log("not")
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("password and email must be filled");
    }
    console.log("not")
    const userLogin = await Login.findOne({ email: email });
    if (!userLogin) {
      console.log("Please fill correct information");
    } else {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        console.log("Please fill correct information");
      }
      else {
        const token = await userLogin.generateAuthToken();
      res.status(200).json({message:"login"}); 
      console.log("not")}
    }
  } catch (err) {
    console.log(err);
  }
});

export default router ;