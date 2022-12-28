var express = require("express");
var router = express.Router();
const { JSDOM } = require("jsdom");
const { get } = require(".");
// const fs = require("fs").promises;

router.get("/", async function (req, res, next) {
  const response = await fetch("https://xl-pipe.ru/", {
    method: get,
  });
  let someArr = [];
  const dom = new JSDOM(response.data);
  dom.window.document.querySelectorAll("a").forEach((link) => {
    console.log(link.href);
    someArr.push(link.href);
  });
  res.render("consoleErrorsView", { consoleErrors: someArr });
});

module.exports = router;
