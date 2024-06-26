const express = require('express')
const app = express()
// Importar los datos
const { libros, autores, usuarios, prestamos } = require('./data');

//Para acceder a los datos fácilmente, necesitamos la ayuda del json-parser de Express, para los POST
app.use(express.json())

//Página inicial
app.get('/', (request, response) => {
  response.send('<h1>Trabajo Práctico Evaluatorio</h1><h2>Servidor ExpressJS</h2><h3>Práctica Profesional</h3>');
})

app.get('/api/libros', (request, response) => {
  response.json(libros)
})

app.get('/api/libros/:id', (request, response) => {
  const id = request.params.id
  const libro = libros.find(libro => libro.id == id)
  if (libro) {
    response.json(libro)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/libros/:id', (request, response) => {
  const id = Number(request.params.id)
  libros = libros.filter(libro => libro.id !== id)

  response.status(204).end()
})

app.post('/api/libros', (request, response) => {
  const libro = request.body;
  if (!libro.titulo || !libro.id_autor) {
    return response.status(400).json({ error: 'Falta título o id de autor' });
  }
  libro.id = libros.length + 1;
  libros.push(libro);
  response.status(201).json(libro);
  console.log(libro);
})

// Ruta para actualizar parcialmente un libro existente
app.patch('/api/libros/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const updatedFields = request.body;

  // Encontrar el libro por ID
  const index = libros.findIndex(libro => libro.id === id);

  if (index !== -1) {
      // Actualizar los campos específicos del libro
      libros[index] = { ...libros[index], ...updatedFields };
      response.json(libros[index]);
  } else {
      response.status(404).json({ error: 'Libro no encontrado' });
  }
});



app.get('/api/autores', (request, response) => {
  response.json(autores)
})

app.get('/api/autores/:id', (request, response) => {
  const id = request.params.id
  const autor = autores.find(autor => autor.id == id)
  if (autor) {
    response.json(autor)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/autores/:id', (request, response) => {
  const id = Number(request.params.id)
  autores = autores.filter(autor => autor.id !== id)

  response.status(204).end()
})

app.post('/api/autores', (request, response) => {
  const autor = request.body
  if (!autor.nombre || !autor.apellido) {
    return response.status(400).json({ error: 'Falta nombre o apellido del autor' });
  }
  autor.id = autores.length + 1;
  autores.push(autor);
  response.status(201).json(autor);
  console.log(autor);
})

// Ruta para actualizar parcialmente un autor existente
app.patch('/api/autores/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const updatedFields = request.body;

  // Encontrar el autor por ID
  const index = autores.findIndex(autor => autor.id === id);

  if (index !== -1) {
      // Actualizar los campos específicos del autor
      autores[index] = { ...autores[index], ...updatedFields };
      response.json(autores[index]);
  } else {
      response.status(404).json({ error: 'Autor no encontrado' });
  }
});


app.get('/api/prestamos', (request, response) => {
  response.json(prestamos)
})

app.get('/api/prestamos/:id', (request, response) => {
  const id = request.params.id
  const prestamo = prestamos.find(prestamo => prestamo.id == id)
  if (prestamo) {
    response.json(prestamo)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/prestamos/:id', (request, response) => {
  const id = Number(request.params.id)
  prestamos = prestamos.filter(prestamo => prestamo.id !== id)

  response.status(204).end()
})

app.post('/api/prestamos', (request, response) => {
  const prestamo = request.body;
  //Sólo se exige id_libro, id_usuario y fecha préstamo, pero no fecha de devolución
  if (!prestamo.id_libro || !prestamo.id_usuario || !prestamo.fecha_prestamo) {
    return response.status(400).json({ error: 'Falta id del usuario, libro o fecha del préstamo' });
  }
  //Si no pasa fecha de devolución se carga con NULL
  if (!prestamo.fecha_devolucion) {
    prestamo.fecha_devolucion = null;
  }
  prestamo.id = prestamos.length + 1;
  prestamos.push(prestamo);
  response.status(201).json(prestamo);
  console.log(prestamo);
})

// Ruta para actualizar parcialmente un préstamo existente
app.patch('/api/prestamos/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const updatedFields = request.body;

  // Encontrar el préstamo por ID
  const index = prestamos.findIndex(prestamo => prestamo.id === id);

  if (index !== -1) {
      // Actualizar los campos específicos del préstamo
      prestamos[index] = { ...prestamos[index], ...updatedFields };
      response.json(prestamos[index]);
  } else {
      response.status(404).json({ error: 'Préstamo no encontrado' });
  }
});

app.get('/api/usuarios', (request, response) => {
  response.json(usuarios)
})

app.get('/api/usuarios/:id', (request, response) => {
  const id = request.params.id
  const usuario = usuarios.find(usuario => usuario.id == id)
  if (usuario) {
    response.json(usuario)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/usuarios/:id', (request, response) => {
  const id = Number(request.params.id)
  usuarios = usuarios.filter(usuario => usuario.id !== id)

  response.status(204).end()
})

app.post('/api/usuarios', (request, response) => {
  const usuario = request.body
  if (!usuario.nombre || !usuario.apellido) {
    return response.status(400).json({ error: 'Falta nombre o apellido del usuario' });
  }
  usuario.id = usuarios.length + 1;
  usuarios.push(usuario);
  response.status(201).json(usuario);
})

// Ruta para actualizar parcialmente un usuario existente
app.patch('/api/usuarios/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const updatedFields = request.body;

  // Encontrar el usuario por ID
  const index = usuarios.findIndex(usuario => usuario.id === id);

  if (index !== -1) {
      // Actualizar los campos específicos del préstamo
      usuarios[index] = { ...usuarios[index], ...updatedFields };
      response.json(usuarios[index]);
  } else {
      response.status(404).json({ error: 'Usuario no encontrado' });
  }
});


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})