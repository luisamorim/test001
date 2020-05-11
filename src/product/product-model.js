class Product {
  static products = [
    { id: 1, description: "product1" },
    { id: 2, description: "product2" },
    { id: 3, description: "product3" },
  ];

  static findAll() {
    return this.products;
  }

  static findById(id) {
    return this.products.filter((item) => item.id == id);
  }
}

module.exports = Product;
