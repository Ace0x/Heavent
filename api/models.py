from operator import index
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship
from config import Base

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)

class Level(Base): 
    __tablename__ = "level"
    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("user.id"), nullable=False)
    name = Column(String(50), nullable=False)
    levelData = Column(String(50), nullable=False)

    user = relationship("User", back_populates="levels")

class LevelStats(Base):
    __tablename__ = "levelstats"
    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("user.id"), nullable=False)
    levelId = Column(Integer, ForeignKey("level.id"), nullable=False)
    deaths = Column(Integer, nullable=False)
    time = Column(Float, nullable=False)

    user = relationship("User", back_populates="levelstats")
    level = relationship("Level", back_populates="levelstats")