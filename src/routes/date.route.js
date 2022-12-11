const express = require("express")
const controller = require("../controllers/date.controller");
const router = express.Router();

router.get("/", (req, res) => {
  controller.getAllDate(res);
});

router.post("/", (req, res) => {
  controller.createOneDate(req, res);
});

module.exports = router;