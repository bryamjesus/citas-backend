const express = require("express")
const controller = require("../controllers/date.controller");
const router = express.Router();

router.get("/", (req, res) => {
  controller.getAllDate(res);
});

router.get("/:id", (req, res) => {
  controller.getOneDate(req, res);
});

router.post("/", (req, res) => {
  controller.createOneDate(req, res);
});

router.put("/:id", (req, res) => {
  controller.updateOneUser(req, res);
});

router.delete("/:id", (req, res) => {
  controller.deleteOneUser(req, res);
});

module.exports = router;