const express = require("express");
const scoreController = require("../controller/scoreController");
const router = express.Router();

router.get("/average", scoreController.getAverageScoreBySubject);
router.get("/top", scoreController.getTop10ofGroupA);
router.get("/statistics", scoreController.getScoreStatistics);
router.get("/search", scoreController.getDetailScore);

module.exports = router;