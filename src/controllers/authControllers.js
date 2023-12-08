const authControllers ={
    loginView:  (req, res) => res.render('./auth/login', {view : {title: 'Login | Funkoshop'}}),
    loginUser:  (req, res) => res.render('./auth/login', {view: {title: 'Register | Funkoshop'}}),
    registerView:  (req, res) => res.render('./auth/register', {view: {title : "Register"}}),
    registerUser:  (req, res) => res.render('./auth/register', {view: {title : "Register"}}),
    logoutView: (req,res) => res.send('Sesión finalizada con éxito.', {view: {title : "Logout"}})
}

module.exports = authControllers;