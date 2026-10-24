// Datos quemados
export const products = [
  { id: 1, nombre: 'Teclado mecánico', descripcion: 'Switches rojos, retroiluminado RGB.', precio: 189000, emoji: '⌨️' },
  { id: 2, nombre: 'Mouse gamer', descripcion: 'Sensor de 16.000 DPI, 7 botones.', precio: 99000, emoji: '🖱️' },
  { id: 3, nombre: 'Audífonos inalámbricos', descripcion: 'Bluetooth 5.3 con cancelación de ruido.', precio: 249000, emoji: '🎧' },
  { id: 4, nombre: 'Monitor 24" Full HD', descripcion: 'Panel IPS, 75 Hz, HDMI.', precio: 599000, emoji: '🖥️' },
  { id: 5, nombre: 'Webcam HD', descripcion: '1080p con micrófono integrado.', precio: 129000, emoji: '📷' },
  { id: 6, nombre: 'Parlante portátil', descripcion: 'Resistente al agua, 12 h de batería.', precio: 159000, emoji: '🔊' },
]

export const formatoCOP = (valor) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
