const mainControllers = {
  home: (req, res) => res.render('index', {title : "Home"}),
  contact:(req, res) =>  res.send('Contact View Route' , {title : "Contacto"}),
  about:(req, res) =>  res.send('About View Route', {title : "About"}),
  faqs:(req, res)  => res.send('FAQs View Route', {title : "Faqs"}),
};

module.exports = mainControllers;