import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  // El badge lee el estado global: se actualiza solo en cualquier vista
  const { totalItems } = useCart()

  const claseLink = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          🛒 TechStore
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={claseLink}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={claseLink}>
            Productos
          </NavLink>
          <NavLink to="/carrito" className={claseLink}>
            Carrito
            <span className="badge" data-testid="cart-badge" aria-label={`${totalItems} ítems en el carrito`}>
              {totalItems}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
