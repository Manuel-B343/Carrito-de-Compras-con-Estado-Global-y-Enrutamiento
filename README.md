Carrito de compras con Estado Global y Enrutamiento

SPA hecha con **React + Vite**, **react-router-dom** y **Context API**.

## Rutas
- `/` – Inicio (también redirige `/inicio`)
- `/productos` – Catálogo de 6 productos con botón "Agregar"
- `/carrito` – Productos agregados, con opción de eliminar

Se usa `HashRouter`, por lo que las URLs en GitHub Pages se ven como `/#/productos` y funcionan al recargar.

## Estado global
`src/context/CartContext.jsx` expone `agregarProducto`, `eliminarProducto`, `quitarUnidad`, `vaciarCarrito` y `totalItems`.
El badge de la Navbar lee `totalItems` y se actualiza al instante en cualquier vista.

## Ejecutar en local
```bash
npm install
npm run dev
```
