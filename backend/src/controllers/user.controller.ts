const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
import {
  BaseHttpController,
  controller,
  httpPost,
  requestBody,
} from "inversify-express-utils";
import { OkResult } from "inversify-express-utils/lib/results";

@controller("")
export class DefaultController extends BaseHttpController {
  constructor() {
    super();
  }

  @httpPost("/register")
  async getDefaultRoute(
    @requestBody() body: AddGroupMemberToDefaultGroupDTO
  ): Promise<OkResult> {
    try {
      const { userName, email, password } = req.body;
      console.log(userName, email, password);

      if (!(email && password && userName)) {
        return res.status(400).send("All input is required");
      }

      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        userName,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    return this.ok("Welcome to Swarmcheck API: ");
  }
}
router.route("/register").post(async (req, res) => {});

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });

    if (user && bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      return res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
