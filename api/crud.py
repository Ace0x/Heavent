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


def get_user_with_username_and_password(db: Session, username: str, password: str):
    return db.query(models.User).filter(models.User.username == username, models.User.password == password).first()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def update_user(db: Session, user_id: int, user: schemas.UserUpdate):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    db_user.victory = user.victory
    db_user.played = user.played
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    db.query(models.User).filter(models.User.id == user_id).delete()
    db.commit()


"""
Level requests
"""


def get_levels(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Level).offset(skip).limit(limit).all()


def get_level(db: Session, level_id: int):
    return db.query(models.Level).filter(models.Level.id == level_id).first()


def get_user_levels(db: Session, user_id: int):
    return db.query(models.Level).filter(models.Level.userId == user_id).all()


def create_level(db: Session, level: schemas.LevelCreate):
    db_level = models.Level(**level.dict())
    db.add(db_level)
    db.commit()
    db.refresh(db_level)
    return db_level


def update_level(db: Session, level_id: int, level: schemas.LevelUpdate):
    db_level = db.query(models.Level).filter(
        models.Level.id == level_id).first()
    db_level.totalDeaths = level.totalDeaths
    db_level.totalVictories = level.totalVictories
    db_level.totalEnemies = level.totalEnemies
    db_level.totalBosses = level.totalBosses
    db_level.likes = level.likes
    db_level.dislikes = level.dislikes
    db.commit()
    db.refresh(db_level)
    return db_level

# Deletes everything related to a level

def delete_level(db: Session, level_id: int):
    db.query(models.LevelStats).filter(
        models.LevelStats.levelId == level_id).delete()
    db.query(models.Level).filter(models.Level.id == level_id).delete()
    db.commit()


"""
Level stats requests
"""


def get_user_level_stats(db: Session, user_id: int, level_id: int):
    return db.query(models.LevelStats).filter(models.LevelStats.userId == user_id, models.LevelStats.levelId == level_id).first()


def create_level_stats(db: Session, level_stats: schemas.LevelStatsCreate):
    db_level_stats = models.LevelStats(**level_stats.dict())
    db.add(db_level_stats)
    db.commit()
    db.refresh(db_level_stats)
    return db_level_stats


def update_level_stats_with_user_level(db: Session, user_id: int, level_id: int, level_stats: schemas.LevelStatsUpdate):
    db_level_stats = db.query(models.LevelStats).filter(
        models.LevelStats.userId == user_id, models.LevelStats.levelId == level_id).first()
    db_level_stats.deaths = level_stats.deaths
    db_level_stats.victories = level_stats.victories
    db_level_stats.time = level_stats.time
    db.commit()
    db.refresh(db_level_stats)
    return db_level_stats


def update_deaths_with_user_level(db: Session, user_id: int, level_id: int, level_stats: schemas.LevelStatsDeathUpdate):
    db_level_stats = db.query(models.LevelStats).filter(
        models.LevelStats.userId == user_id, models.LevelStats.levelId == level_id).first()
    db_level_stats.deaths = level_stats.deaths
    db.commit()
    db.refresh(db_level_stats)
    return db_level_stats


def update_victories_and_time_with_user_level(db: Session, user_id: int, level_id: int, level_stats: schemas.LevelStatsTimeVictoryUpdate):
    db_level_stats = db.query(models.LevelStats).filter(
        models.LevelStats.userId == user_id, models.LevelStats.levelId == level_id).first()
    db_level_stats.victories = level_stats.victories
    db_level_stats.time = level_stats.time
    db.commit()
    db.refresh(db_level_stats)
    return db_level_stats


"""
Requests from views
"""
def get_most_playing_users(db: Session, skip: int = 0, limit: int = 3):
    return db.execute(f"SELECT * FROM heaventdb.most_played_players LIMIT {limit};").all()

def get_most_winning_users(db: Session, skip: int = 0, limit: int = 3):
    return db.execute(f"SELECT * FROM heaventdb.most_winning_players LIMIT {limit};").all()

def get_most_liked_levels(db: Session, skip: int = 0, limit: int = 3):
    return db.execute(f"SELECT * FROM heaventdb.most_liked_levels LIMIT {limit};").all()

"""
Requests from stored procedures
"""
def compare_levels(db: Session, levelId_1: int, levelId_2: int):
    return db.execute(f"CALL compare_levels({levelId_1}, {levelId_2});").all()

def compare_users(db: Session, userId_1: int, userId_2: int):
    return db.execute(f"CALL compare_users({userId_1}, {userId_2});").all()

def compare_levelstats(db: Session, levelId: int, userId_1: int, userId_2: int):
    return db.execute(f"CALL compare_levelstats({levelId}, {userId_1}, {userId_2});").all()