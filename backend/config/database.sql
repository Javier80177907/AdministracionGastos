CREATE DATABASE database;

USE database;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    icono VARCHAR(10),
    tipo ENUM('INGRESO', 'GASTO', 'AMBOS') NOT NULL
);

CREATE TABLE movimiento (
    id_movimiento INT AUTO_INCREMENT PRIMARY KEY,
    monto DECIMAL(12,2) NOT NULL,
    fecha DATE NOT NULL,
    tipo ENUM('INGRESO', 'GASTO') NOT NULL,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,

    CONSTRAINT fk_movimiento_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuario(id_usuario),

    CONSTRAINT fk_movimiento_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categoria(id_categoria)
);


INSERT INTO categoria (nombre, tipo) VALUES
('Comida', 'GASTO'),
('Transporte', 'GASTO'),
('Estudio', 'GASTO'),
('Salidas', 'GASTO'),
('Suscripciones', 'GASTO'),
('Hogar', 'GASTO'),
('Salario', 'INGRESO'),
('Otro', 'AMBOS');

INSERT INTO usuario (nombre, correo, password) VALUES
('Javier Patiño', 'javier@gmail.com', '123456'),
('Carlos Pérez', 'carlos@gmail.com', '123456');

INSERT INTO movimiento
(monto, fecha, tipo, id_usuario, id_categoria)
VALUES
(25000, '2026-08-01', 'GASTO', 1, 1),
(15000, '2026-08-02', 'GASTO', 1, 2),
(50000, '2026-08-03', 'GASTO', 1, 3),
(35000, '2026-08-04', 'GASTO', 1, 4),
(45000, '2026-08-05', 'GASTO', 1, 5),
(120000, '2026-08-06', 'GASTO', 1, 6),
(2500000, '2026-08-07', 'INGRESO', 1, 7),
(80000, '2026-08-08', 'GASTO', 1, 8),
(30000, '2026-08-09', 'GASTO', 2, 1),
(1800000, '2026-08-10', 'INGRESO', 2, 7);