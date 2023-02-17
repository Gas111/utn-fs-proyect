const express = require('express')
const baseModule = require('hbs')
const router = express.Router()
const usersModel = require('../../models/users.model')


router.get('/login', (req, res, next) => {
  res.render('admin/login', { layout: 'admin/layout',title:"Tu Acuario en Casa" })
})

router.post('/login', async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  const data = await usersModel.getUserByUsernameAndPassword(email, password)
  console.log(data)
  if (data) {
    req.session.id_user= data.id
    req.session.email= data.email
    console.log(req.session.id_user, req.session.email)
    
    res.redirect('/admin/novedades')
  } else {
    res.render('admin/login', { layout: 'admin/layout', error: true,message:" email o password incorrectos" })
  }
})


router.get('/logout', (req, res, next) => {
  req.session.destroy()
    res.render('admin/login', { layout: 'admin/layout',title:"Tu Acuario en Casa" })
})






module.exports = router
