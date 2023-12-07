const modelsProduct = require ('../models/product.js')

const adminControllers = {
    adminView: async (req, res) => {
      const { data } = await modelsProduct.getAllItems();
      res.render( './admin/admin',
      {
        view: {
          title: 'List of Products | Admin Funkoshop'
        },
        items: data
      });
    },

    createView: async (req, res) =>{
      const { data: categories } = await modelsProduct.getAllCategory();
      const { data: licences } = await modelsProduct.getAllLicence();
  
      res.render('./admin/create', {
        view: {
          title: 'Create Product | Admin Funkoshop'
        },
        categories,
        licences
      });
    },

    createItem: async (req, res) => {
      const item = req.body;
      const files = req.files;
      const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: '/'+files[0].filename,
        image_back: '/'+files[1].filename,
        licence_id: item.collection,
        category_id: item.category
      }
      await modelsProduct.create(itemSchema);
      res.redirect('/admin');
    },

    editView:  async (req, res) => {
      const id = req.params.id;
      const { data: categories } = await modelsProduct.getAllCategory();
      const { data: licences } = await modelsProduct.getAllLicence();
      const { data } = await modelsProduct.getOneItem({product_id: id})
      //console.log(categories, licences);
      res.render('./admin/edit', {
        view: {
          title: `Edit Product #${id} | Admin Funkoshop`
        },
        item: data[0],
        categories,
        licences
      });
    },

    editItem: async (req, res) => {
      const id = req.params.id;
      const item = req.body;
      const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        sku: item.sku,
        dues: item.dues,
        image_front: '/imagen_front',
        image_back: '/imagen_front',
        licence_id: item.collection,
        category_id: item.category
      }
  
      await modelsProduct.edit(itemSchema);
      res.redirect('/admin');
    },

    deleteItem: async (req, res) => {
      const id = req.params.id;
      await modelsProduct.delete({product_id: id});
      res.redirect('/admin');
    },
  };

  module.exports = adminControllers;