const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const getContactById = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const result = await Contact.findById(id);

    if (!result) {
      throw new NotFound(`Contact with id=${id} not found!`);
    }
    console.log(id);
    res.json({
      status: "success",
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
