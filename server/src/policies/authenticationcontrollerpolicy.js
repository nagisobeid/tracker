const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const pattern = '^[a-zA=z0-9]{8,32}$'
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp(pattern))
    })

    // const { error } = Joi.validate(req.body, schema)
    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain following characters
            2. it must containe at  least 1 number`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid Registration information'
          })
      }
    } else {
      next()
    }
  }
}
