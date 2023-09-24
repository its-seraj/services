const express = require("express");
const router = express.Router();

const tummocController = require("../controller/tummoc");

router.get("/addUser", tummocController.addUser);
router.get("/isActive", tummocController.verify);

module.exports = router;
