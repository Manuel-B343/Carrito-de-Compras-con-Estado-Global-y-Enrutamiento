import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section className="hero">
      <h1>Bienvenido a TechStore</h1>
      <p>
        Tu tienda de tecnología. Explora el catálogo, agrega tus productos favoritos al carrito y
        mira cómo el contador de la barra de navegación se actualiza al instante en todas las vistas.
      </p>
      <Link to="/productos" className="btn btn-primary">
        Ver productos
      </Link>
    </section>
  )
}
