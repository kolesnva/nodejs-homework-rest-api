const { User } = require("../../models");

const { sendEmail, createEmail } = require("../../helpers");

const sendVerification = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    req.status(400).json({ message: "No user with this email" });
  }

  if (user.verify) {
    res.status(400).json({ message: "Verification has already been passed" });
  }
  const mail = createEmail(email, user.verificationToken);
  sendEmail(mail);
  res.status(200).json({ message: "Verification email sent" });
};

module.exports = sendVerification;
