const shopControllers = {
    View: (req, res) => res.render('./shop/shop'),
    itemView: (req, res) => res.render('./shop/item'),
    addItemToCart: (req, res) => res.render('./shop/cart'),
    cartView: (req, res) => res.render('./shop/cart'),
    checkout: (req, res) => res.send('Route for got to checkout page'),
  };

  module.exports = shopControllers;