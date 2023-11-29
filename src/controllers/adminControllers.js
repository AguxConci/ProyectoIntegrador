const adminControllers = {
    adminView: (req, res) => res.render('./admin/admin'),
    createView:  (req, res) => res.render('./admin/create'),
    createItem:  (req, res) => res.render('.admin/create'),
    editView:  (req, res) => res.render('./admin/edit'),
    editItem:  (req, res) => res.render('./admin/edit'),
    deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'),
   
  };

  module.exports = adminControllers;