const shopControllers = {
    View: (req, res) => res.send('Route for Shop View'),
    itemView: (req, res) => res.send('Route for find and retrieve a product from an ID'),
    addItemToCart: (req, res) => res.send('Route for add the curent item to the shop cart'),
    cartView: (req, res) => res.send('Route for cart View'),
    checkout: (req, res) => res.send('Route for got to checkout page'),
  };

  module.exports = shopControllers;