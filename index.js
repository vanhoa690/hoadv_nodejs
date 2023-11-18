const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;
// app.use(express.urlencoded());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");


const routes = require('./routes')

const db = require('./config/db');

// Connect to DB
db.connect();

routes(app)

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
