from app import db
from sqlalchemy import ForeignKey
from flask_sqlalchemy import SQLAlchemy

class adress_client(db.Model):
    __tablename__ = 'endereco_cliente'
    id_endereco_cli = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    rua_cli = db.Column(db.String(255), nullable=False)
    numero_cli = db.Column(db.String(10), nullable=False)
    apto_cli = db.Column(db.String(2), nullable=False)
    bloco_cli = db.Column(db.String(20), nullable=False)
    bairro_cli = db.Column(db.String(50), nullable=False)
    cep_cli = db.Column(db.String(11), nullable=False)
    cidade_cli = db.Column(db.String(50), nullable=False)
    uf_cli = db.Column(db.String(2), nullable=False)

    def __init__(self, id_endereco_cli, rua_cli, numero_cli, apto_cli, bloco_cli, bairro_cli, cep_cli, cidade_cli, uf_cli):
        self.rua_cli = rua_cli
        self.numero_cli = numero_cli
        self.apto_cli = apto_cli
        self.bloco_cli = bloco_cli
        self.bairro_cli = bairro_cli
        self.cep_cli = cep_cli
        self.cidade_cli = cidade_cli
        self.uf_cli = uf_cli