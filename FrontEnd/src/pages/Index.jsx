import { Axios } from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/pages/index.css'
import Article from './Article'

const Index = () => {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const loadNewArticles = async () => {
      setLoading(true)
      const response = await Axios.get('http://localhost:3000/api/novedades')
      setArticles(response.data)
      setLoading(false)
    }
    loadNewArticles()
  }, [])

  return (
    <div className="main">
      <section className="main__offerts"></section>

      <section className="main__hot-products">
        <div className="hot-products-title">
          <h2>Productos en Promocion</h2>
        </div>
        <div className="box-products">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            articles.map((article) => (
              <Article
                image={article.image}
                key={article.id}
                stock={article.stock}
                price={article.price}
                type={article.type}
                title={article.title}
              />
            ))
          )}
        </div>
      </section>
      <section className="main__bottom-fish"></section>
    </div>
  )
}

export default Index
