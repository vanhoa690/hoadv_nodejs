import express from 'express';
import { engine } from 'express-handlebars';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
// import connectDb from './config/db';

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

// Connect to DB
async function connectDb(dbUrl) {
  try {
    await mongoose.connect(dbUrl);
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log('Connect failure!!!');
  }
}
connectDb(DB_URL);

routes(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
