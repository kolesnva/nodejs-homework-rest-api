const express = require("express");

const { validation, auth, upload, ctrlWrapper } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.current));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;