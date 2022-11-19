const { User } = require("../../models");

const current = async (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    status: "Succes",
    code: 200,
    data: {
      email,
      subscription,
    },
  });
};

module.exports = current;
