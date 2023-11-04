import bcryptjs from "bcryptjs";
import User from "../model/userModel.js";

export const signup = async(req,res)=>{
    const {userName, email, password}=req.body;
    const hiddenpassword= bcryptjs.hashSync(password,10)
    const newUser= new User({userName, email, password:hiddenpassword});
    try {
        await newUser.save();
        res.status(200).send("User Created Successfully");
      } catch (error) {
        res.status(500).send("Error creating user: " + error.message);
      }
}


