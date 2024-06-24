-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

-- Crear la tabla de autores
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50)
);

-- Crear la tabla de libros
CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES autores(id)
);

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50)
);

-- Crear la tabla de préstamos
CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_prestamo INT,
    id_usuario INT,
    fecha_prestamo DATETIME,
    fecha_devolucion DATETIME,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Insertar datos en la tabla de autores
INSERT INTO autores (id, nombre, apellido) VALUES
(11, 'Julio', 'Verne'),
(12, 'Gabriel', 'García Marquez');

-- Insertar datos en la tabla de libros
INSERT INTO libros (id, titulo, id_autor) VALUES
(1, 'Viaje al centro de la Tierra', 11),
(2, 'La vuelta al mundo en 80 días', 11),
(3, 'Cien años de soledad', 12);

-- Insertar datos en la tabla de usuarios
INSERT INTO usuarios (id, nombre, apellido) VALUES
(21, 'Julia', 'Perez'),
(22, 'Gabriela', 'López');

-- Insertar datos en la tabla de préstamos
INSERT INTO prestamos (id, id_prestamo, id_usuario, fecha_prestamo, fecha_devolucion) VALUES
(31, 1, 21, '2024-06-12 12:00:00', '2024-06-22 12:00:00'),
(32, 3, 21, '2024-06-12 12:00:00', '2024-06-22 12:00:00');
