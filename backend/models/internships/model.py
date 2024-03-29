from models.db import db
from datetime import datetime
from dataclasses import dataclass

@dataclass
class InternShip(db.Model):
    __tablename__ = "internships"

    
    id: int
    IN_Id: str
    Company_Id: str
    title: str
    description: str
    requirements: str
    terms: str
    duration_type: str
    duration: str
    Schedule: str
    structure: str
    status: str
    slots_available: int
    application_deadline: str
    internship_location: str
    reg_at: str
    reg_by: str
    upd_at: str
    upd_by: str


    id = db.Column(db.Integer, nullable=False, unique=True)
    IN_Id = db.Column(db.String(5), primary_key=True)
    Company_Id = db.Column(db.String(5), nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.Text, nullable=False)
    requirements = db.Column(db.Text, nullable=False)
    terms = db.Column(db.Text, nullable=False)
    duration_type = db.Column(db.String(6), default="weeks")
    duration = db.Column(db.Integer, nullable=False)
    Schedule = db.Column(db.String(8), default="Fulltime")
    structure = db.Column(db.String(6), default="Onsite")
    status = db.Column(db.String(10), default = "active")
    slots_available = db.Column(db.Integer, nullable=False)
    application_deadline = db.Column(db.String(30), nullable=False, )
    internship_location = db.Column(db.String(50), nullable=False)
    reg_at = db.Column(db.String(100), nullable=False, default=datetime.now()) 
    reg_by = db.Column(db.String(2), db.ForeignKey("admins.A_Id"), nullable=False)
    upd_at = db.Column(db.String(100), nullable=False, onupdate=datetime.now())
    upd_by = db.Column(db.String(2), default="Not yet")

    saved_internships = db.relationship("SavedInternship", backref="internship", lazy="dynamic")
    applications = db.relationship("Application", backref="internship", lazy="dynamic")
    
    