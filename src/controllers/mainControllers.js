const mainControllers = {
  home: (req, res) => res.render('index'),
  contact:(req, res) =>  res.send('Contact View Route'),
  about:(req, res) =>  res.send('About View Route'),
  faqs:(req, res)  => res.send('FAQs View Route'),
};

module.exports = mainControllers;