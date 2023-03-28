// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import Usermodel from "../../model/users/user.js"
// import store from 'store'

// const secret = "test";

// export const signup = async (req, res) => {
//   const { username, password } = req.body;
  

//   try {
//     const oldUser = await Usermodel.findOne({ username });

//     if (oldUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const result = await Usermodel.create({
//       username,
//       password: hashedPassword,
//     });

//     const token = jwt.sign({ username: result.username, id: result._id }, secret, {
//       expiresIn: "1h",
//     });

//     res.status(201).json({ result, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });

//     console.log(error);
//   }
// };

// export const login = async (req, res) => {
//   const { username, password } = req.body;

  

//   try {
//     const oldUser = await Usermodel.findOne({ username });

//     if(!oldUser) return res.status(404).json({ message: "User Dosn't exist"});

//     const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

//     if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials"});

//     const token = jwt.sign({ username: oldUser.username, id: oldUser._id}, secret, { expiresIn: "1h"});

//     res.status(200).json({ result: oldUser, token})
//   } catch (error) {
//     res.status(500).json({message: "something went wrong"});
    
//   }


// }