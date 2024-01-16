//@description     Auth user and set token
//route            POST => /api/users/auth
//@acess           Public (not protected)
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong');
  res.status(200).json({ message: "Auth User" });
});

//@description     Register new user
//route            POST => /api/users
//@access          Public again

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);

  const userExists = await User.findOne({ email: email }); //or just email

  if (userExists) {
    res.status(400);
    throw new Error(`User already exists`);
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
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
  res.status(200).json({ message: "Logout User" });
});

//@description      Get User Profile
//route             GET => /api/users/profile
//@acess            Private (valide json web token)
const userProfile = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong');
  res.status(200).json({ message: "User Profile" });
});

//@description     Update user profile
//route            PUT => /api/users/profile
//@acess           Private (valide json web token)
const updateUserProfile = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something went wrong');
  res.status(200).json({ message: "Update User Profile" });
});
export { authUser, registerUser, logoutUser, userProfile, updateUserProfile };
