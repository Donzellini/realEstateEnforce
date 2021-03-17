CREATE TABLE public.PROPRIETARIO_IMOVEL (ID_PROP serial PRIMARY KEY, 
										 NOME_PROP varchar(255), 
										 RG_PROP char(9), 
										 CPF_PROP char(11),
										 DATA_NASC_PROP date,
										 ESTADO_CIVIL_PROP varchar(20),
										 EMAIL_PROP varchar(100), 
										 TELEFONE_PROP char(11),
										 PROF_PROP varchar(50));
										 
select * from public.PROPRIETARIO_IMOVEL 

-- DROP TABLE PUBLIC.PROPRIETARIO_IMOVEL