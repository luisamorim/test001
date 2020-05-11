const request = require("request");

class Product {
  static products = [
    { id: 1, description: "product1" },
    { id: 2, description: "product2" },
    { id: 3, description: "product3" },
  ];

  static findAll() {
    return new Promise((resolve, reject) => {
      request(
        {
          method: "GET",
          url: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_SECRET}@send4-avaliacao.myshopify.com/admin/api/2020-01/products.json`,
        },
        (error, response) => {
          if (error) reject(error);
          resolve(response.body);
        }
      );
    });
  }

  static findById(id) {
    return this.products.filter((item) => item.id == id);
  }
}

module.exports = Product;
