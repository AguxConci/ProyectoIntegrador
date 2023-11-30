const authControllers ={
    loginView:  (req, res) => res.render('./auth/login', {title : "Loguin"}),
    loginUser:  (req, res) => res.render('./auth/login', {title : "Loguin"}),
    registerView:  (req, res) => res.render('./auth/register', {title : "Register"}),
    registerUser:  (req, res) => res.render('./auth/register', {title : "Register"}),
    logoutView: (req,res) => res.send('Sesión finalizada con éxito.', {title : "Logout"})
}

module.exports = authControllers;