import { Link } from 'react-router-dom'
import { formatoCOP } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Carrito() {
  const { items, totalItems, totalPrecio, agregarProducto, quitarUnidad, eliminarProducto, vaciarCarrito } = useCart()

  if (items.length === 0) {
    return (
      <section className="hero">
        <h1>Tu carrito está vacío</h1>
        <p>Aún no has agregado productos.</p>
        <Link to="/productos" className="btn btn-primary">
          Ir a productos
        </Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Carrito</h1>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <span className="cart-emoji" aria-hidden="true">
              {item.emoji}
            </span>
            <div className="cart-info">
              <strong>{item.nombre}</strong>
              <span className="muted">{formatoCOP(item.precio)} c/u</span>
            </div>
            <div className="qty">
              <button className="btn btn-small" onClick={() => quitarUnidad(item.id)} aria-label="Quitar una unidad">
                −
              </button>
              <span>{item.cantidad}</span>
              <button className="btn btn-small" onClick={() => agregarProducto(item)} aria-label="Agregar una unidad">
                +
              </button>
            </div>
            <span className="subtotal">{formatoCOP(item.precio * item.cantidad)}</span>
            <button className="btn btn-danger" onClick={() => eliminarProducto(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p>
          Total ({totalItems} {totalItems === 1 ? 'ítem' : 'ítems'}): <strong>{formatoCOP(totalPrecio)}</strong>
        </p>
        <button className="btn" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>
    </section>
  )
}
