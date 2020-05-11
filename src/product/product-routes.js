const controller = require("./product-controller");
module.exports = (app) => {
  app.get("/products", controller.findAll);
  app.get("/product/:id", controller.findById);
};
