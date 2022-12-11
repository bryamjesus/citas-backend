const express = require("express")
const controller = require("../controllers/user.controller");
const router = express.Router();

router.get("/", (req, res) => {
  controller.getAllUsers(res);
});

router.get("/:id", (req, res) => {
  controller.getOneUser(req, res);
});

router.post("/", (req, res) => {
  controller.createOneUser(req, res);
});

module.exports = router;