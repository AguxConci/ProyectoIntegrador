const mainControllers = {
  home: (req, res) => (req, res) => res.send('Home View Route'),
  contact:(req, res) => (req, res) => res.send('Contact View Route'),
  about:(req, res) => (req, res) => res.send('About View Route'),
  faqs:(req, res) =>(req, res) => res.send('FAQs View Route'),
};

module.exports = mainControllers;