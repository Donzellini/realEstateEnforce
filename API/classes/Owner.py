from ..app import db
from sqlalchemy import ForeignKey

class owner(db.Model):
    __tablename__ = 'proprietario'
    id_owner = db.Column(db.Integer(), primary_key=True, autoincrement=True, unique=True)
    name_owner = db.Column(db.String(255), nullable=False)
    rg_owner = db.Column(db.String(9), nullable=False)
    cpf_owner = db.Column(db.String(11), nullable=False)
    birth_date_owner = db.Column(db.String(10), nullable=False)
    civil_status_owner = db.Column(db.String(20), nullable=False)
    email_owner = db.Column(db.String(100), nullable=False)
    cel_owner = db.Column(db.String(11), nullable=False)
    prof_owner = db.Column(db.String(50), nullable=False)
    tempo_prop = db.Column(db.String(5), nullable= False)

    def __init__(self, id_owner, name_owner, rg_owner, cpf_owner, birth_date_owner, civil_status_owner, email_owner, cel_owner, prof_owner, tempo_prop):
        self.id_owner = id_owner
        self.name_owner = name_owner
        self.rg_owner = rg_owner
        self.cpf_owner = cpf_owner
        self.birth_date_owner = birth_date_owner
        self.civil_status_owner = civil_status_owner
        self.email_owner = email_owner
        self.cel_owner = cel_owner
        self.prof_owner = prof_owner
        self.tempo_prop = tempo_prop