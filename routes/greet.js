const express = require("express");
const router = express.Router();

router.get("/:name", (req, res) => {
  res.render("greet", { title: "Greet", name });
});

module.exports = router;
