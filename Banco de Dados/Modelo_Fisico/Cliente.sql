CREATE TABLE public.CLIENTE (ID_CLIENTE serial PRIMARY KEY, 
										NOME_CLI varchar(255), 
										RG_CLI char(9), 
										CPF_CLI char(11),
										DATA_NASC_CLI date,
										ESTADO_CIVIL_CLI varchar(20),
										EMAIL_CLI varchar(100), 
										TELEFONE_CLI char(11),
							            ID_ENDERECO_CLIENTE int NOT NULL,
							            FOREIGN KEY (ID_ENDERECO_CLIENTE) REFERENCES public.ENDERECO_CLIENTE (ID_ENDERECO_CLIENTE),
										PROFISSAO_CLI varchar(50));
										 
select * from public.CLIENTE 

-- DROP TABLE PUBLIC.CLIENTE