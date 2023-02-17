const pool = require('../models/database')
var md5 = require('md5')

const getArticles = async () => {
  try {
    const query = 'select * from articles order by id desc'
    const row = await pool.query(query)
    return row
  } catch (error) {
    throw error
  }
}

const insertArticle = async (obj) => {
  try {
    const query = 'insert into articles set ? '
    const rows = await pool.query(query, [obj])
    return rows
  } catch (error) {
    throw error
  }
}

const deleteArticleById = async (id) => {
  try {
    const query = 'delete from articles where id = ? '
    const rows = await pool.query(query, [id])
    return rows
  } catch (error) {
    throw error
  }
}

const getArticleById = async (id) => {
  try {
    const query = 'select * from articles where id = ? '
    const row = await pool.query(query, [id])
    return row[0]
  } catch (error) {
    throw error
  }
}
const changeArticleById = async (obj,id) => {
  try {
    console.log(obj)
    const query = 'update articles set ? where id = ? '
    const row = await pool.query(query, [obj,id])
    return row
  } catch (error) {
    throw error
  }
}

module.exports = { getArticles, insertArticle, deleteArticleById,changeArticleById,getArticleById }
