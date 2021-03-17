CREATE TABLE public.ENDERECO_CLIENTE (ID_ENDERECO_CLIENTE serial PRIMARY KEY, 
									  RUA_CLI varchar(255), 
									  NUMERO_CLI int, 
									  APTO_CLI int,
									  BLOCO_CLI varchar(20),
									  BAIRRO_CLI varchar(50),
									  CEP_CLI char(8), 
									  CIDADE_CLI varchar(50),
									  UF_CLI char(2));
									 
select * from public.ENDERECO_CLIENTE 

-- DROP TABLE PUBLIC.ENDERECO_CLIENTE