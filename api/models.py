from operator import index
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, JSON
from sqlalchemy.orm import relationship
from config import Base

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)

    level = relationship("Level", back_populates="user")
    levelstats = relationship("LevelStats", back_populates="user")

class Level(Base): 
    __tablename__ = "level"
    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("user.id"), nullable=False)
    name = Column(String(50), nullable=False)
    levelData = Column(JSON, nullable=False)

    user = relationship("User", back_populates="level")
    levelstats = relationship("LevelStats", back_populates="level")

class LevelStats(Base):
    __tablename__ = "levelstats"
    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("user.id"), nullable=False)
    levelId = Column(Integer, ForeignKey("level.id"), nullable=False)
    deaths = Column(Integer, nullable=False)
    time = Column(Float, nullable=False)

    user = relationship("User", back_populates="levelstats")
    level = relationship("Level", back_populates="levelstats")
