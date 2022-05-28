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

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def create_user(db: Session, user: schemas.UserCreate):
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

def create_level(db: Session, level: schemas.LevelCreate):
    db_level = models.Level(**level.dict())
    db.add(db_level)
    db.commit()
    db.refresh(db_level)
    return db_level

"""
Level stats requests
"""
def get_all_user_level_stats(db: Session, user_id: int, level_id: int):
    return db.query(models.LevelStats).filter(models.LevelStats.userId == user_id, models.LevelStats.levelId == level_id).all()

def create_level_stats(db: Session, level_stats: schemas.LevelStatsCreate):
    db_level_stats = models.LevelStats(**level_stats.dict())
    db.add(db_level_stats)
    db.commit()
    db.refresh(db_level_stats)
    return db_level_stats

"""
User stats requests
"""
def get_all_users_stats(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.UserStats).offset(skip).limit(limit).all()

def get_user_stats(db: Session, user_id: int):
    return db.query(models.UserStats).filter(models.UserStats.userId == user_id).first()

def create_user_stats(db: Session, user_stats: schemas.UserStatsCreate):
    db_user_stats = models.UserStats(**user_stats.dict())
    db.add(db_user_stats)
    db.commit()
    db.refresh(db_user_stats)
    return db_user_stats

def update_user_stats(db: Session, user_stats: schemas.UserStatsUpdate, user_id: int):
    db_user_stats = db.query(models.UserStats).filter(models.UserStats.userId == user_id).first()
    db_user_stats.played = user_stats.played
    db_user_stats.victory = user_stats.victory
    db.commit()
    db.refresh(db_user_stats)
    return db_user_stats