import { products, formatoCOP } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Productos() {
  const { agregarProducto, items } = useCart()

  const cantidadEnCarrito = (id) => items.find((item) => item.id === id)?.cantidad ?? 0

  return (
    <section>
      <h1>Productos</h1>
      <div className="grid">
        {products.map((producto) => {
          const enCarrito = cantidadEnCarrito(producto.id)
          return (
            <article key={producto.id} className="card">
              <div className="card-emoji" aria-hidden="true">
                {producto.emoji}
              </div>
              <h2>{producto.nombre}</h2>
              <p className="muted">{producto.descripcion}</p>
              <p className="price">{formatoCOP(producto.precio)}</p>
              <button className="btn btn-primary" onClick={() => agregarProducto(producto)}>
                Agregar
              </button>
              {enCarrito > 0 && <span className="en-carrito">En el carrito: {enCarrito}</span>}
            </article>
          )
        })}
      </div>
    </section>
  )
}
