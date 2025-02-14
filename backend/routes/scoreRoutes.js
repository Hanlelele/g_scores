const express = require("express");
const scoreController = require("../controller/scoreController");
const router = express.Router();

router.get("/:sbd", scoreController.getDetailScore);

module.exports = router;