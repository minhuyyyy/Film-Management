const express = require("express");
const Users = require("../models/Users");
const router = express.Router();
const argon2 = require("argon2");
const user = require("../models/Users");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ success: false, message: "Missing username or password" });
  try {
    const user = await Users.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username taken" });
    const hashedPassword = await argon2.hash(password);
    const newUser = new Users({ username, password: hashedPassword });
    await newUser.save();
    //return token
    const accessToken = jwt.sign(
      { userID: newUser._id },
      process.env.ACCESS_TOKEN
    );
    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({success: false, message: 'Internal server error'})
  }
});
module.exports = router;
