const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { validation } = require("../../middlewares");
const {
  joiContactSchema,
  joiFavoriteContactSchema,
} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validation(joiContactSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validation(joiContactSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validation(joiFavoriteContactSchema),
  ctrl.updateFavorite
);

module.exports = router;
