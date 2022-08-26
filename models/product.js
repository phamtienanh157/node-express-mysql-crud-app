"user strict";

const Product = function (product) {
  this.name = product.name;
  this.price = product.price;
  this.mfg = product.mfg;
  this.branch = product.branch;
};

Product.read = function (result) {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Product;
