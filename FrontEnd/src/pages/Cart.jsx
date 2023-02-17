import React from 'react'

const Cart = () => {
  return (
    <div>
      <main className="main">
        <h2>Items Seleccionados</h2>
        <div className="line"></div>
        <div className="products-selected">Ningun Producto Seleccionado</div>
        <p>
          Total de la compra: $ <span>Precio</span>
        </p>

        <section className="main__bottom-fish"></section>
      </main>
    </div>
  )
}

export default Cart
