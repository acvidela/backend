const libros = [
    {
      id: 1,
      titulo: "Viaje al centro de la Tierra",
      id_autor: 11
    },
    {
      id: 2,
      titulo: "La vuelta al mundo en 80 días",
      id_autor: 11
    },
    {
      id: 3,
      content: "Cien años de soledad",
      id_autor: 12
    }
];

const autores = [
  {
    id: 11,
    nombre: "Julio",
    apellido: "Verne"
  },
  {
    id: 12,
    nombre: "Gabriel",
    apellido: "García Marquez"
  }
];

const usuarios = [
  {
    id: 21,
    nombre: "Julia",
    apellido: "Perez"
  },
  {
    id: 22,
    nombre: "Gabriela",
    apellido: "López"
  }
];

const prestamos = [
  {
    id: 31,
    id_prestamo: 1,
    id_usuario: 21,
    fecha_prestamo: "2024-06-12T12:00:00Z",  // Fecha en formato ISO 8601
    fecha_devolucion: "2024-06-22T12:00:00Z"
  },
  {
    id: 32,
    id_prestamo: 3,
    id_usuario: 21,
    fecha_prestamo: "2024-06-12T12:00:00Z", 
    fecha_devolucion: "2024-06-22T12:00:00Z"
  }
];

module.exports = {
    libros,
    autores,
    usuarios,
    prestamos
};