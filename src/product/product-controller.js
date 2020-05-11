const Product = require("./product-model");
module.exports = {
  findAll: async (req, res) => {
    res.send(await Product.findAll());
  },
  findById: (req, res) => {
    res.send(Product.findById(req.params.id));
  },
};
