CREATE TABLE `usuario` (
  `n_usuario_usuario` int PRIMARY KEY,
  `s_nome_usuario` varchar(255),
  `c_tipo_tipoUsuario` int,
  `c_status_usuario` varchar(255)
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT,
  `n_ususario_usuario` int,
  `s_ddd_telefone` varchar(255),
  `s_numero_telefone` varchar(255)
);

CREATE TABLE `tipoUsuario` (
  `n_tipo_tipoUsuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipoUsuario` varchar(255),
  `n_nivel_tipoUsuario` int
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`c_tipo_tipoUsuario`) REFERENCES `tipoUsuario` (`n_nivel_tipoUsuario`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_ususario_usuario`) REFERENCES `usuario` (`n_usuario_usuario`);
