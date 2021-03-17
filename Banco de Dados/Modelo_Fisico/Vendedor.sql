CREATE TABLE public.VENDEDOR (ID_VENDEDOR serial PRIMARY KEY, 
							  NOME_VENDEDOR varchar(255), 
							  MATRICULA_VENDEDOR int, 
							  EMAIL_VENDEDOR varchar(100), 
							  TELEFONE_VENDEDOR char(11));
										 
select * from public.VENDEDOR 

-- DROP TABLE PUBLIC.VENDEDOR