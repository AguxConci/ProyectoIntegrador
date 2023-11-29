const authControllers ={
    loginView:  (req, res) => res.render('./auth/login'),
    loginUser:  (req, res) => res.render('./auth/login'),
    registerView:  (req, res) => res.render('./auth/register'),
    registerUser:  (req, res) => res.render('./auth/register'),
    logoutView: (req,res) => res.send('Sesión finalizada con éxito.')
}

module.exports = authControllers;