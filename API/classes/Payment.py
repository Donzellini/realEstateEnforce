from ..app import db
from sqlalchemy import ForeignKey
from .Seller import seller
from .Client import client
from .PaymentType import payment_type

class payment(db.Model):
    __tablename__ = 'compra'
    id_compra = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    id_vendedor = db.Column(db.Integer(), ForeignKey('vendedor.id_vendedor'))
    id_cli = db.Column(db.Integer(), ForeignKey('cliente.id_cli'))
    valor_compra = db.Column(db.Numeric(), nullable=False)
    id_tipo_compra = db.Column(db.Integer(), ForeignKey('tipo_compra.id_tipo_compra'))
            
    def __init__(self, id_compra, id_vendedor, id_cli, valor_compra, id_tipo_compra):
        self.id_compra = id_compra
        self.id_vendedor = id_vendedor 
        self.id_cli = id_cli
        self.valor_compra = valor_compra
        self.id_tipo_compra = id_tipo_compra