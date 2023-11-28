const adminControllers = {
    adminView: (req, res) => res.render('admin'),
    createView:  (req, res) => res.render('create'),
    createItem:  (req, res) => res.render('create'),
    editView:  (req, res) => res.render('edit'),
    editItem:  (req, res) => res.render('edit'),
    deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'),
    loginView:  (req, res) => res.render('login'),
    loginUser:  (req, res) => res.render('login'),
    registerView:  (req, res) => res.render('register'),
    registerUser:  (req, res) => res.render('register'),
  };

  module.exports = adminControllers;