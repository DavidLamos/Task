const User = require("../models/userModel");
const toDoList = require("../models/toDoListModel");

module.exports.login = async (req, res, next) => {
  try {
    const { userName } = req.body;
    console.log(req.body);

    const user = await User.findOne({ userName });
    console.log(user);
    if (!user) {
      res.json({
        msg: "Not exist! Please register!",
        status: false,
      });
    } else {
      user.isLogin = true;
      await user.save();
      res.json({ msg: "Login Success!" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports.register = async (req, res, next) => {
  try {
    const { userName } = req.body;
    console.log(userName); // Log the username for debugging

    // Check if the username already exists
    const usernameCheck = await User.findOne({ userName });
    console.log(usernameCheck);
    if (usernameCheck) {
      return res.json({ msg: "Username already exists", status: false });
    }

    // Create a new user
    const user = new User({
      userName,
      isLogin: false,
    });

    console.log(userName);

    // Save the user and await the operation
    await user.save();

    return res.json({ msg: "Register Success" });
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};
module.exports.logOut = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const user = await User.updateOne(
      {
        userName,
      },
      { $set: { isLogin: false } }
    );
    res.json({ msg: "Logout Success!" });
  } catch (error) {
    next(error);
  }
};
