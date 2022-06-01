
from sqlalchemy import Column, ForeignKey, Integer, String, Float, JSON
from sqlalchemy.orm import relationship
from config import Base

# User table
class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    victory = Column(Integer, default=0)
    played = Column(Integer, default=0)

    level = relationship("Level", back_populates="user")
    levelstats = relationship("LevelStats", back_populates="user")

# Level table
class Level(Base): 
    __tablename__ = "level"
    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("user.id"), nullable=False)
    name = Column(String(50), nullable=False)
    levelData = Column(JSON, nullable=False)
    totalDeaths = Column(Integer, default=0)
    totalVictories = Column(Integer, default=0)
    totalEnemies = Column(Integer, default=0)
    totalBosses = Column(Float, default=0)
    likes = Column(Integer, default=0)
    dislikes = Column(Integer, default=0)


    user = relationship("User", back_populates="level")
    levelstats = relationship("LevelStats", back_populates="level")

# Level stats table
class LevelStats(Base):
    __tablename__ = "levelstats"
    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("user.id"), nullable=False)
    levelId = Column(Integer, ForeignKey("level.id"), nullable=False)
    deaths = Column(Integer, nullable=False)
    time = Column(Float, nullable=False)
    victories = Column(Integer, nullable=False)

    user = relationship("User", back_populates="levelstats")
    level = relationship("Level", back_populates="levelstats")
