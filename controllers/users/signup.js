const { User } = require("../../models");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const { createEmail, sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email ${email} already in use`);
  }
  const verificationToken = uuidv4();
  const avatarURL = gravatar.url(email);
  const newUser = new User({
    subscription,
    email,
    avatarURL,
    verificationToken,
  });

  newUser.setPassword(password);
  newUser.save();

  const mail = createEmail(email, verificationToken);

  sendEmail(mail);

  res.status(201).json({
    status: "Created",
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
