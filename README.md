# TechStore · Carrito de compras con Estado Global y Enrutamiento

SPA de una tienda de tecnología donde el usuario navega entre vistas, agrega productos a un carrito y ve el contador de la barra de navegación actualizarse al instante, sin importar en qué vista esté.

**Demo en vivo:** https://manuel-b343.github.io/Carrito-de-Compras-con-Estado-Global-y-Enrutamiento/

---

## Funcionalidades

- **Navegación sin recargas** entre Inicio, Productos y Carrito, con una barra de navegación visible en todas las vistas.
- **Catálogo de 6 productos** (datos locales) con botón "Agregar".
- **Badge en tiempo real** en la Navbar con el total de ítems del carrito.
- **Carrito completo:** ver productos, sumar o restar unidades, eliminar un producto o vaciar todo.
- **Total calculado** en pesos colombianos (COP).

## Rutas

| Ruta | Vista | Descripción |
|---|---|---|
| `/` | Inicio | Página de bienvenida (`/inicio` redirige aquí) |
| `/productos` | Productos | Catálogo con botón "Agregar" |
| `/carrito` | Carrito | Productos agregados, con opción de eliminar |

Se usa `HashRouter`, por lo que en GitHub Pages las URLs se ven como `/#/productos` y funcionan al recargar sin dar 404.

## Estado global

El carrito vive en un **Context API** (`src/context/CartContext.jsx`), con el `CartProvider` envolviendo toda la app. Expone:

| Elemento | Función |
|---|---|
| `agregarProducto(producto)` | Agrega un producto o suma 1 a su cantidad |
| `eliminarProducto(id)` | Quita el producto del carrito |
| `quitarUnidad(id)` | Resta 1 unidad (si llega a 0, se elimina) |
| `vaciarCarrito()` | Deja el carrito vacío |
| `totalItems` / `totalPrecio` | Valores derivados; `totalItems` alimenta el badge |

Cualquier componente accede a ese estado con el hook `useCart()`.

## Tecnologías

- [React 18](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router DOM 6](https://reactrouter.com/)
- Context API
- GitHub Actions + GitHub Pages para el despliegue

## Estructura

```
src/
├── components/
│   └── Navbar.jsx        # Navegación + badge del carrito
├── context/
│   └── CartContext.jsx   # Estado global del carrito
├── data/
│   └── products.js       # Productos y formato de moneda
├── pages/
│   ├── Inicio.jsx
│   ├── Productos.jsx
│   └── Carrito.jsx
├── App.jsx               # Definición de rutas
└── main.jsx              # HashRouter + CartProvider
```

## Ejecutar en local

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Despliegue

Cada push a `main` ejecuta un workflow de GitHub Actions que instala dependencias, compila con `npm run build` y publica la carpeta `dist` en GitHub Pages.

---
