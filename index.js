const express = require("express");
const { engine } = require("express-handlebars");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const { PORT, DB_URL } = process.env;

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static("uploads"));

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

const routes = require("./routes");

const db = require("./config/db");

// Connect to DB
db.connect(DB_URL);

routes(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
