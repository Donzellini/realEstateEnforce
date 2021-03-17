from ..app import db
from sqlalchemy import ForeignKey
from .Client import client
from .Banks import banks

class finance(db.Model):
    __tablename__ = 'financiamento'
    id_financiamento = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    id_cli = db.Column(db.Integer(), ForeignKey('cliente.id_cli'))
    id_banco = db.Column(db.Integer(), ForeignKey('bancos.id_banco'))
    entrada = db.Column(db.Numeric(), nullable= False)
    num_parcela = db.Column(db.Integer(), nullable=False)

            
    def __init__(self, id_financiamento, id_cli, id_banco, entrada, num_parcela):
        self.id_financiamento = id_financiamento
        self.id_cli = id_cli 
        self.id_banco = id_banco
        self.entrada = entrada
        self.num_parcela = num_parcela