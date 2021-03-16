from app import db
from sqlalchemy import ForeignKey

class adress_immobile(db.Model):
    __tablename__ = 'endereco_imovel'
    id_endereco_imov = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    rua_imov = db.Column(db.String(255), nullable=False)
    numero_imov = db.Column(db.String(10), nullable=False)
    apto_imov = db.Column(db.String(2), nullable=False)
    bloco_imov = db.Column(db.String(20), nullable=False)
    bairro_imov = db.Column(db.String(50), nullable=False)
    cep_imov = db.Column(db.String(11), nullable=False)
    cidade_imov = db.Column(db.String(50), nullable=False)
    uf_imov = db.Column(db.String(2), nullable=False)

    def __init__(self, id_endereco_imov, rua_imov, numero_imov, apto_imov, bloco_imov, bairro_imov, cep_imov, cidade_imov, uf_imov):
        self.id_endereco_imov = id_endereco_imov
        self.rua_imov = rua_imov
        self.numero_imov = numero_imov
        self.apto_imov = apto_imov
        self.bloco_imov = bloco_imov
        self.bairro_imov = bairro_imov
        self.cep_imov = cep_imov
        self.cidade_imov = cidade_imov
        self.uf_imov = uf_imov