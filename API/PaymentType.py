from app import db
from sqlalchemy import ForeignKey
from Financing import finance

class payment_type(db.Model):
    __tablename__ = 'tipo_compra'
    id_tipo_compra = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    vista = db.Column(db.Boolean(), nullable=False)
    id_financiamento = db.Column(db.Integer(), ForeignKey('financiamento.id_financiamento'))
            
    def __init__(self, id_tipo_compra, vista, id_financiamento):
        self.id_tipo_compra = id_tipo_compra
        self.vista = vista 
        self.id_financiamento = id_financiamento