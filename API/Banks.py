from app import db
from sqlalchemy import ForeignKey

class banks(db.Model):
    __tablename__ = 'bancos'
    id_banco = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    name_banco = db.Column(db.String(20), nullable=False)
            
    def __init__(self, id_banco, name_banco):
        self.id_banco = id_banco
        self.name_banco = name_banco