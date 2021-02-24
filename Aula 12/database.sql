/* DELETAR DADOS [PERIGOSO] */
DELETE FROM usuarios;

/* DELETAR DADOS COM SEGURANÇA */
DELETE FROM usuarios WHERE id = 1;
DELETE FROM usuarios WHERE nome = 'Pedro';

/* ATUALIZANDO DADOS */
UPDATE usuarios SET nome = 'Pedroca', senha = '1234' WHERE id = 1;
UPDATE usuarios SET nome = 'Sapo' WHERE nome = 'Pedro';