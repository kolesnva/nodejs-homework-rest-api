const { NotFound } = require("http-errors");
const contactsOperations = require("../../models/contacts");

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.removeContact(contactId);

    if (!result) {
      throw new NotFound(`Product with id=${contactId} not found!`);
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
