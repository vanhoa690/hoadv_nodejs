const express = require('express');
const { engine } = require('express-handlebars');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./docs/swagger.json');
const swaggerJsdoc  = require('swagger-jsdoc');

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

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'K4 Nodejs',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const routes = require('./routes');

const db = require('./config/db');

// Connect to DB
db.connect(DB_URL);

routes(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
