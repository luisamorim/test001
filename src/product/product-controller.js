const Product = require("./product-model");
module.exports = {
  findAll: (req, res) => {
    res.send(Product.findAll());
  },
  findById: (req, res) => {
    res.send(Product.findById(req.params.id));
  },
};
