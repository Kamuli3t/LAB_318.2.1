const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

aboutRouter = require("./routes/about");
greetRouter = require("./routes/greet");
mainRouter = require("./routes/main");
imageRouter = require("./routes/image");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/image", imageRouter);
app.use("/about", aboutRouter);
app.use("/greet", greetRouter);
app.use("/", mainRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Response is here!");
});

app.post("/submit-form", (req, res) => {
  res.send("Successfully submitted your form! ");
});
app.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
