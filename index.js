const express = require('express')
const app = express()

// Importar los datos
const { libros, autores, usuarios, prestamos } = require('./data');

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})