const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contactController");

// Lấy tất cả các liên hệ
router.get("/getcontact", contactController.getContacts);
// Gửi liên hệ
router.post("/sendcontact", contactController.addContact);

module.exports = router;