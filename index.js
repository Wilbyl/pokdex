const express = require("express");
const app = express();
const port = process.env.PORT || 5300;
const path = require("path");
let message = "";

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("../index");
});

app.get("/index", (req, res) => {
  res.render("../cadastro.ejs");
});
app.get('/', function (req, res) {
  res.render('cadastro');
});



app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);


