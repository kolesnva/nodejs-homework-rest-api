const { User } = require("../../models");
const { NotFound } = require("http-errors");

const verifyUser = async (req, res) => {
  const { verificationToken } = req.params;

  const result = await User.findOneAndUpdate(
    { verificationToken },
    { verificationToken: null, verify: true }
  );

  if (!result) {
    throw NotFound();
  }

  res.status(200).json({ message: "Verification successful" });
};

module.exports = verifyUser;
