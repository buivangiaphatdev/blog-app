import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fileds are requried"));
  }

  const hashesPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashesPassword });

  try {
    await newUser.save();
    res.json("Sign up successfull");
  } catch (error) {
    next(error);
  }
};
