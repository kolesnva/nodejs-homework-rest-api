const { User } = require("../../models");
const { Conflict } = require("http-errors");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email ${email} already in use`);
  }

  const newUser = new User({ subscription, email });

  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "Created",
    code: 201,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = signup;
