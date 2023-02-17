import React from 'react'

const Article = ({title,type,price,stock,image}) => {
  return (
    <div>
    <div className="card-product">
                    <div className="card-product__image">
                        <img src={image} alt=""/>
                        
                    </div>
                    <div className="card-product__info">
                        <h5 className="title-product">{title}}</h5>
                        <p>Tipo:<span>{type}</span></p>
                        <p>Precio:<span>{price}</span></p>
                        <p>Stock:<span>{stock}</span><span> Unidades</span></p>
                        <p><span></span></p>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div> 
    </div>
  )
}

export default Article