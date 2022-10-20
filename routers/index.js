const express = require("express");

const ageBetween = require("./ageBetween");
const genderCount = require("./genderCount");
const userInfo = require("./userInfo");
const validateUser = require("./validateUser");

const router = express.Router();

router.post("/age", ageBetween);
router.post("/genderCount", genderCount);
router.post("/userInfo", userInfo);
router.post("/validateUser", validateUser);

module.exports = router;
