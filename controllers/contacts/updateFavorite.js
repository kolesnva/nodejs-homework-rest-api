const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const updateFavorite = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const { favorite } = req.body;
    const result = await Contact.findByIdAndUpdate(
      id,
      { favorite },
      { new: true }
    );
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

module.exports = updateFavorite;
