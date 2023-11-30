const shopControllers = {
    View: (req, res) => res.render('./shop/shop', {title : "Shop"}),
    itemView: (req, res) => res.render('./shop/item', {title : "Item"}),
    addItemToCart: (req, res) => res.render('./shop/cart', {title : "Add Item"}),
    cartView: (req, res) => res.render('./shop/cart', {title : "Cart"}),
    checkout: (req, res) => res.send('Route for got to checkout page', {title : "Checkout"}),
  };

  module.exports = shopControllers;