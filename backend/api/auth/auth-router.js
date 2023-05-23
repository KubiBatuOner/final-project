const router = require("express").Router();
const UserModel = require("../user/user-model");
const { JWT_SECRET } = require("../../config/index");
const jwt = require("jsonwebtoken");
const mw = require("./auth-middleware");
const bcrypt = require("bcryptjs");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "auth is working" });
});

router.post("/register", mw.payloadCheck, async (req, res, next) => {
  try {
    const newUserObj = {
      email: req.body.email,
      password: req.encPassword,
    };
    let insertedUser = await UserModel.addUser(newUserObj);
    res.status(201).json(insertedUser);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/login",
  mw.payloadCheckLogin,
  mw.passwordCheck,
  async (req, res, next) => {
    try {
      const token = jwt.sign(
        {
          user_id: req.user.user_id,
          email: req.user.email,
        },
        JWT_SECRET,
        { expiresIn: "1d" }
      );
      res.status(200).json({
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
