const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const updateContact = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw new NotFound(`Contact with id=${id} not found!`);
    }
    res.json({
      status: "success",
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
