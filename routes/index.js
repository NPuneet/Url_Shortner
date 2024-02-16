const express = require("express");
const router = express.Router();
const { handleCreateUser } = require("../controllers/index");
const { handleGetAnalytics } = require("../controllers/index");

router.route("/").post(handleCreateUser)
router.get("/analytics/:shortId", handleGetAnalytics);


module.exports = router;
