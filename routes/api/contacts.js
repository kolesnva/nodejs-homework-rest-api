const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const {
  joiContactSchema,
  joiFavoriteContactSchema,
} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(joiContactSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validation(joiContactSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validation(joiFavoriteContactSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
