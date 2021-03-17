from ..app import db
from sqlalchemy import ForeignKey

class seller(db.Model):
    __tablename__ = 'vendedor'
    id_vendedor = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    name_vendedor = db.Column(db.String(255), nullable=False)
    matricula_vendedor = db.Column(db.String(9), nullable=False)
    email_vendedor = db.Column(db.String(11), nullable=False)
    telefone_vendedor = db.Column(db.String(10), nullable=False)
        
    def __init__(self, id_vendedor, name_vendedor, matricula_vendedor, email_vendedor, telefone_vendedor):
        self.id_vendedor = id_vendedor
        self.name_vendedor = name_vendedor
        self.matricula_vendedor = matricula_vendedor
        self.email_vendedor = email_vendedor
        self.telefone_vendedor = telefone_vendedor