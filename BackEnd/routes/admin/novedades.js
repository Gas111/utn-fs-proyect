const express = require('express')
const router = express.Router()
const articlesModel = require('../../models/articles.model')
const util = require('util')
const cloudinary = require('cloudinary').v2

const uploader = util.promisify(cloudinary.uploader.upload)
const destroy = util.promisify(cloudinary.uploader.destroy)

router.get('/', async (req, res, next) => {
  let articles = await articlesModel.getArticles()

  articles = await articles.map((article) => {
    if (article.img_id) {
      const imagen = cloudinary.image(article.img_id, {
        width: 100,
        height: 100,
        crop: 'fill',
      })
      return {...article, imagen }
    } else {
      return {...article, imagen: '' }
    }
  })

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.email,
    title: 'Tu Acuario en Casa',
    articles,
  })
})

router.get('/agregar', async (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout',
    title: 'Tu Acuario en Casa',
  })
})

router.post('/agregar', async (req, res, next) => {
  const title = req.body.title
  const subtitle = req.body.subtitle
  const body = req.body.body
  let img_id = ''
  if (req.files && Object.keys(req.files).length > 0) {
    const imagen = req.files.image
    img_id = (await uploader(imagen.tempFilePath)).public_id
  }

  try {
    if (title != '' && subtitle != '' && body != '' && img_id != '') {
      const articles = await articlesModel.insertArticle({
        title,
        subtitle,
        body,
        img_id,
      })

      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        title: 'Tu Acuario en Casa',
        error: true,
        message: 'Todos los campos son requeridos',
      })
    }
  } catch (error) {
    throw error

    res.render('admin/agregar', {
      layout: 'admin/layout',
      title: 'Tu Acuario en Casa',
      error: true,
      message: 'No se cargo la novedad',
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  const { id } = req.params

  const article = await articlesModel.getArticleById(id)
  if (article.img_id) {
    await destroy(article.img_id)
  }

  const result = await articlesModel.deleteArticleById(id)
  res.redirect('/admin/novedades')
})

router.get('/modificar/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await articlesModel.getArticleById(id)

  res.render('admin/modificar', {
    layout: 'admin/layout',
    title: 'Tu Acuario en Casa',
    result,
  })
})

router.post('/modificar/:id', async (req, res, next) => {
  try {
    let img_id = req.body.img_id
    let borrar_img_vieja = false
    if (req.body.img_delete == '1') {
      img_id = null
      borrar_img_vieja = true
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen
        img_id = await uploader(imagen.tempFilePath).public_id
        borrar_img_vieja = true
      }
    }
    if (borrar_img_vieja && req.body.img_id) {
      await destroy(req.body.img_id)
    }

    const { id } = req.params
    const {title,subtitle,body}=req.body
    console.log(title,subtitle,body,id,img_id)

    const result=await articlesModel.changeArticleById({title,subtitle,body,img_id},id)

    res.redirect('/admin/novedades')

  } catch (error) {}
})

module.exports = router
