const modelsProduct = require ('../models/product.js')

const mainControllers = {
  home: async(req, res) => {
    const licences = await modelsProduct.getAllLicence();
    res.render('index', {
      view: {
        title: "Home | Funkoshop"
      },
      collections: licences.data,
    });
  },
  contact:(req, res) =>  res.send('Contact View Route' , {title : "Contacto"}),
  about:(req, res) =>  res.send('About View Route', {title : "About"}),
  faqs:(req, res)  => res.send('FAQs View Route', {title : "Faqs"}),
};

module.exports = mainControllers;