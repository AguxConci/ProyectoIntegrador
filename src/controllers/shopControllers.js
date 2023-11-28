const shopControllers = {
    View: (req, res) => res.render('shop'),
    itemView: (req, res) => res.render('item'),
    addItemToCart: (req, res) => res.render('cart'),
    cartView: (req, res) => res.render('cart'),
    checkout: (req, res) => res.send('Route for got to checkout page'),
  };

  module.exports = shopControllers;