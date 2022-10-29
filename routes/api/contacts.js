const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { contactSchema } = require("../../schemas");
const { validation } = require("../../middlewares");
const validateMiddleware = validation(contactSchema);
const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateMiddleware, ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateMiddleware, ctrl.updateContact);

module.exports = router;
