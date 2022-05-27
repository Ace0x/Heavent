from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy.sql.expression import update
import models
import schemas
import time

def main_html_reponse(res):
    return """
    <html>
        <head>
        <title>Reto IoT TC1004</title>
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
        </style>
        </head>
        <body>
            <h1>API ara la TC1004B</h1>
            <h3>Elaborado por:</h3>
            <ul>
                <li>Joshua Amaya</li>
                <li>Diego Corrales</li>
                <li>Sebastián González</li>
                <li>Gerardo Gutiérrez</li>
                <li>Mateo Herrera</li>
                <li>Do Hyun Nam</li>
            </ul>
        </body>
    </html>
    """


"""
User requests
"""
def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def add_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


"""
Level requests
"""
def get_levels(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Level).offset(skip).limit(limit).all()

def add_level(db: Session, level: schemas.LevelCreate):
    db_level = models.Level(**level.dict())
    db.add(db_level)
    db.commit()
    db.refresh(db_level)
    return db_level

"""
Level stats requests
"""