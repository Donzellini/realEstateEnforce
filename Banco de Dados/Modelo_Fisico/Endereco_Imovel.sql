CREATE TABLE public.ENDERECO_IMOVEL (ID_ENDERECO_IMOVEL serial PRIMARY KEY, 
									 RUA_IMOV varchar(255), 
									 NUMERO_IMOV int, 
									 APTO_IMOV int,
									 BLOCO_IMOV varchar(20),
									 BAIRRO_IMOV varchar(50),
									 CEP_IMOV char(8), 
									 CIDADE_IMOV varchar(50),
									 UF_IMOV char(2));
									 
select * from public.ENDERECO_IMOVEL 

-- DROP TABLE PUBLIC.ENDERECO_IMOVEL