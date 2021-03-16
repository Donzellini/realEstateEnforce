from app import db
from sqlalchemy import ForeignKey, Integer 
from flask_sqlalchemy import SQLAlchemy
from AddressClient import adress_client
from sqlalchemy.orm import sessionmaker, relationship

class client(db.Model):
    __tablename__ = 'cliente'
    id_cli = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    name_cli = db.Column(db.String(255), nullable=False)
    rg_cli = db.Column(db.String(9), nullable=False)
    cpf_cli = db.Column(db.String(11), nullable=False)
    birth_date_cli = db.Column(db.String(10), nullable=False)
    civil_status_cli = db.Column(db.String(20), nullable=False)
    email_cli = db.Column(db.String(100), nullable=False)
    cel_cli = db.Column(db.String(11), nullable=False)
    id_endereco_cli = db.Column(db.Integer(), db.ForeignKey('endereco_cliente.id_endereco_cli'))
    # id_endereco_cli = db.Column(db.Integer(), ForeignKey('endereco_cliente.id_endereco_cli'))
    prof_cli = db.Column(db.String(50), nullable=False)
    
    endereco_cliente = relationship("adress_client", foreign_keys=[id_endereco_cli])

    def __init__(self, id_cli, name_cli, rg_cli, cpf_cli, birth_date_cli, civil_status_cli, email_cli, cel_cli, prof_cli, tempo_prop):
        self.id_cli = id_cli
        self.name_cli = name_cli
        self.rg_cli = rg_cli
        self.cpf_cli = cpf_cli
        self.birth_date_cli = birth_date_cli
        self.civil_status_cli = civil_status_cli
        self.email_cli = email_cli
        self.cel_cli = cel_cli
        self.prof_cli = prof_cli