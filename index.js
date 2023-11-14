const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc  = require('swagger-jsdoc');
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Routes
const routes = require('./routes')

const db = require('./config/db');

// Connect to DB
db.connect();



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
routes(app)
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
