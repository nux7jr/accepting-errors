var express = require("express");
var router = express.Router();
// const { JSDOM } = require("jsdom");
const fs = require("fs").promises;

router.get("/", async function (req, res, next) {
  const data = await fs.readFile("text.txt", "binary");

  res.render("index", { title: "Test", test: data });
});

module.exports = router;
