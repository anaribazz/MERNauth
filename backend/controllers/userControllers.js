//@description     Auth user and set token
//route            POST => /api/users/auth
//@acess           Public (not protected)
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong');
  // res.status(200).json({ message: "Auth User" });
  const { email, password } = req.body;
  const user = await User.findOne( { email } );

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});


//@description     Register new user
//route            POST => /api/users
//@access          Public again

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email: email }); //or just email

  if (userExists) {
    res.status(400);
    throw new Error(`User already exists`);
  }
  const user = await User.create({
    name,
    email,
    password
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error("Create a user failed");
  }
  // res.status(401);
  // throw new Error('Something went wrong');
  // res.status(200).json({ message: "Register User" });
});

//@description      Logout user
//route             POST => /api/users/logout
//@acess            Public
const logoutUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong');
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({ message: "Logged Out" });
});

//@description      Get User Profile
//route             GET => /api/users/profile
//@acess            Private (valide json web token)
const userProfile = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong');
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  }

  res.status(200).json(user);
});

//@description     Update user profile
//route            PUT => /api/users/profile
//@acess           Private (valide json web token)
const updateUserProfile = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong');
  const user = await User.findById(req.user._id);

  if (user) {
    
   user.name == req.body.name || user.name;
   user.email == req.body.email || user.email;

   if (user.req.body.password) {
    user.password == req.body.password;
   }

   const updatedUser = await user.save();

   res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email

   })

  } else {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({ message: "Update User Profile" });
});
export { authUser, registerUser, logoutUser, userProfile, updateUserProfile };
