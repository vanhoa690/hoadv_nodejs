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
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");


const routes = require('./routes')

const db = require('./config/db');

// Connect to DB
db.connect();

routes(app)
// app.get("/", (req, res) => {
//   // return res.send('Hello World!');
//   res.render("home");
// });

// app.get("/products/:id", (req, res) => {
//   const {query, params, body} = req
//   console.log(query)
//   console.log(params)
//   console.log(body)
//   // return res.send('Hello World!');
//   res.render("home");
// });

// app.post("/products", (req, res) => {
//   const { body} = req
//   console.log(body)
//   // return res.send('Hello World!');
//   res.render("home");
// });

// app.get("/search", (req, res) => {
// //   return res.send("Hello search!");
// const {query, params, body} = req
//   console.log(query)
// res.render("search");
// });

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
