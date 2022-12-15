require("dotenv").config();
const { BASE_URL } = process.env;

const createEmail = async (email, verificationToken) => {
  const verificationLink = `${BASE_URL}/api/users/verify/${verificationToken}`;

  return {
    to: email,
    subject: "Mail confirmation",
    html: `<a target="_blank" href="${verificationLink}">Press to confirm email</a>`,
  };
};

module.exports = createEmail;
