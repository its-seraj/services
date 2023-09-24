const express = require("express");
const router = express.Router();

const tummocController = require("../controller/tummoc");

router.post("/addUser", tummocController.addUser);
router.post("/isActive", tummocController.verify);

module.exports = router;
