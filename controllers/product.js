const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  Product.read(function (err, products) {
    if (err) {
      return res.status(403).send(err);
    }
    res.send({ statusCode: 200, message: 'success', data: products })
  });
};
