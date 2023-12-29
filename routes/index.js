const products = require("./products");
const apiProducts = require("./apiProducts");
const categories = require("./categories");
const upload = require("./upload");

const site = require("./site");
const users = require("./users");
const students = require("./students");
const auth = require("./auth");
const {
  checkPermissionStudent,
  checkPermissionUser,
} = require("../middlewares/checkPermission");

function routes(app) {
  app.use("/auth", auth);
  app.use("/upload", upload);
  app.use("/students", students);
  app.use("/categories", categories);
  app.use("/users", checkPermissionUser, users);
  app.use("/products", checkPermissionStudent, products);
  app.use("/api/products", apiProducts);
  app.use("/", site);
}

module.exports = routes;
