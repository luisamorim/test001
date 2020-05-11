const products = require("./src/product");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Send Server");
  });

  products.routes(app);
};
