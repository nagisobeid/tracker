const AuthenticationController = require('./controller/authenticationcontroller')

const AuthenticationControllerPolicy = require('./policies/authenticationcontrollerpolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
}
