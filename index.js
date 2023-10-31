const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render("home");
  });

app.get("/home", (req, res) => {
    return res.send('Hello Home!');
  });


app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);



