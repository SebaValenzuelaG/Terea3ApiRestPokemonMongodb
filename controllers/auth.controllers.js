import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res)=>{ 
    const {username, password }=req.body;
    try {
       const passwordHassh = await bcrypt.hash(password,10);
       const role = "Entrenador";

        const newUser= new User({
            username,
            password: passwordHassh,
            role: role
            });
    
            const userSaved =  await newUser.save();
            const token = await createAccessToken({ id: userSaved._id})

        
        res.cookie('token', token)

        res.json({
            message:"User created successfully",
        })  
    } catch (error) {
        console.log(error)
    }
    
  
    
};
export const login = async (req, res)=>{ 
    const {username, password }=req.body;
    try {

        const userFound = await User.findOne({username})
        if(!userFound) return res.status(404).json({message:"incorrect credentials"})

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(404).json({message:"incorrect credentials"})
      
            const token = await createAccessToken({ id: userFound._id})

        
        res.cookie('token', token)

        return res.status(200).json({
            message:"ok",
        })  
    } catch (error) {
        console.log(error)
    }
    
  
    
};
export const profile = async(req, res) =>{
    
    const userFound = await User.findById(req.user.id);

    if(!userFound) return res.status(400).json({ message:" User not found"});

    return res.json({
        id: userFound._id,
        username:userFound.username,
        role: userFound.role
    })
    console.log(req.user)
    res.send("profile")
}

export const logout = (req, res)=>{
    res.cookie('token',"",{
        expires: new Date(0)
    })

    return res.sendStatus(200)
}