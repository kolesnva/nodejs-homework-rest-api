const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const removeContact = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const result = await Contact.findByIdAndRemove(id);

    if (!result) {
      throw new NotFound(`Contact with id=${id} not found!`);
    }
    res.json({
      status: "success",
      code: 200,
      message: "Contact deleted",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
