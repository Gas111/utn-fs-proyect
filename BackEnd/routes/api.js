var express = require('express')

var router = express.Router()
var articlesModel = require('../models/articles.model')
const nodemailer = require('nodemailer')
const transporter = require('../utils/mailer')

router.get('/novedades', async (req, res, next) => {
  const articles = await articlesModel.getArticles()

  res.json(articles)
})

router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'gastoncolque@gmail.com',
    subject: 'Contacto web',
    html: `<p>${req.body.fistname} ${req.body.lastname} se contacto a traves de la web y quiere mas informacion a este correo:${req.body.email}</p><p>Ademas hizo el siguiente comentario ${req.body.message}</p>`,
  }

  const result = await transporter.sendMail(mail)

  if (result) {
    res.json({ error: false, message: 'mensaje enviado' })
  } else {
    res.status(400).json({ error: true, message: 'no enviado' })
  }
})

module.exports = router
