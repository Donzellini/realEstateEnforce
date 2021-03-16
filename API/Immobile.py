from app import db
from sqlalchemy import ForeignKey
from AddressImmobile import adress_immobile
from Owner import owner
from Seller import seller
from ImmobileType import immobile_type
from Payment import payment

class immobile(db.Model):
    __tablename__ = 'imovel'
    id_imovel = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    id_endereco_imov = db.Column(db.Integer(), db.ForeignKey('endereco_imovel.id_endereco_imov'))
    id_owner = db.Column(db.Integer(), db.ForeignKey('proprietario.id_owner')) 
    id_vendedor = db.Column(db.Integer(), db.ForeignKey('vendedor.id_vendedor'))
    id_tipo_imovel = db.Column(db.Integer(), db.ForeignKey('tipo_imovel.id_tipo_imovel'))
    id_compra = db.Column(db.Integer(), db.ForeignKey('compra.id_compra'))
            
    def __init__(self, id_imovel, id_endereco_imov, id_owner, id_vendedor, id_tipo_imovel, id_compra):
        self.id_imovel = id_imovel
        self.self.id_endereco_imov = id_endereco_imov
        self.id_owner = id_owner
        self.id_vendedor = id_vendedor
        self.id_tipo_imovel = id_tipo_imovel
        self.id_compra = id_compra