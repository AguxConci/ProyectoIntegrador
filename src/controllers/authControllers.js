const modelsUser = require('../models/user')


const authControllers ={
    loginView:  (req, res) => res.render('./auth/login', {view : {title: 'Login | Funkoshop',  error: req.query.error}}),
   
    loginUser:  async(req, res) => {  
        const { email, password } = req.body;
        const [valido] = await modelsUser.verificarUser(email, password);
        // console.log(valido) --> de aca llega una matriz dificil de recorrer por eso debo deconstruyo con [valido] 
        if (valido !== undefined){ 
            res.redirect('/admin')
        }else{
            req.session.userid = valido.user_id //guardo id como sesion, el session no es parte de request debo crear la session 
            res.redirect(`/admin?user=${valido.idusers}`)}},

     registerView:  (req, res) => res.render('./auth/register', {view: {title : "Register"}}),
    
     registerUser:  async(req, res) => {
          const userNew = req.body;
          const userSchema = {
          name : userNew.nombre,
          lastname : userNew.apellido,
          email : userNew.email,
          password: userNew.pass};

          const creado = await modelsUser.crearUser(userSchema)
          res.redirect('./auth/login')
     },

    logoutView: (req,res) => res.send('Sesión finalizada con éxito.', {view: {title : "Logout"}})
}

module.exports = authControllers;