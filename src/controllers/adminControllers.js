const adminControllers = {
    adminView: (req, res) => res.render('./admin/admin', {title : "Admin"}),
    createView:  (req, res) => res.render('./admin/create', {title : "Create"}),
    createItem:  (req, res) => res.render('.admin/create', {title : "Create Item"}),
    editView:  (req, res) => res.render('./admin/edit', {title : "Edit"}),
    editItem:  (req, res) => res.render('./admin/edit', {title : "Edit Item"}),
    deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database', {title : "Delete Item"}),
   
  };

  module.exports = adminControllers;