import { createContext, useContext, useState, useCallback, useMemo } from 'react'

// 1. Se crea el contexto: es el "estado global" compartido por toda la app
const CartContext = createContext(null)

// 2. El Provider guarda el estado del carrito y expone las funciones para modificarlo
export function CartProvider({ children }) {
  // Cada ítem: { ...producto, cantidad }
  const [items, setItems] = useState([])

  // Agregar un producto: si ya existe suma 1 a la cantidad, si no lo añade
  const agregarProducto = useCallback((producto) => {
    setItems((actuales) => {
      const existe = actuales.find((item) => item.id === producto.id)
      if (existe) {
        return actuales.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item,
        )
      }
      return [...actuales, { ...producto, cantidad: 1 }]
    })
  }, [])

  // Eliminar un producto del carrito (quita toda la línea)
  const eliminarProducto = useCallback((id) => {
    setItems((actuales) => actuales.filter((item) => item.id !== id))
  }, [])

  // Restar una unidad (si llega a 0 se elimina)
  const quitarUnidad = useCallback((id) => {
    setItems((actuales) =>
      actuales
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item))
        .filter((item) => item.cantidad > 0),
    )
  }, [])

  const vaciarCarrito = useCallback(() => setItems([]), [])

  // Valores derivados: el badge de la Navbar lee totalItems
  const totalItems = useMemo(() => items.reduce((suma, item) => suma + item.cantidad, 0), [items])
  const totalPrecio = useMemo(
    () => items.reduce((suma, item) => suma + item.precio * item.cantidad, 0),
    [items],
  )

  const value = useMemo(
    () => ({ items, totalItems, totalPrecio, agregarProducto, eliminarProducto, quitarUnidad, vaciarCarrito }),
    [items, totalItems, totalPrecio, agregarProducto, eliminarProducto, quitarUnidad, vaciarCarrito],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// 3. Hook personalizado para consumir el contexto desde cualquier componente
export function useCart() {
  const contexto = useContext(CartContext)
  if (!contexto) {
    throw new Error('useCart debe usarse dentro de un <CartProvider>')
  }
  return contexto
}
