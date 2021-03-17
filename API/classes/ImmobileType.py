from ..app import db
from sqlalchemy import ForeignKey

class immobile_type(db.Model):
    __tablename__ = 'tipo_imovel'
    id_tipo_imovel = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    tipo_imovel = db.Column(db.String(20), nullable=False)
            
    def __init__(self, id_tipo_imovel, tipo_imovel):
        self.id_tipo_imovel = id_tipo_imovel
        self.tipo_imovel = tipo_imovel 