from pydantic import BaseModel
from typing import Optional 

"""
Schemas for users
"""
class UserCreate(BaseModel):
    id: Optional[int]
    username: str
    password: str

    class Config:
        orm_mode=True

class UserUpdate(BaseModel):
    victory: Optional[int]
    played: Optional[int]

    class Config:
        orm_mode=True

"""
Schemas for levels
"""
class LevelCreate(BaseModel):
    id: Optional[int]
    userId: int
    name: str
    levelData: dict

    class Config:
        orm_mode=True

class LevelUpdate(BaseModel):
    totalDeaths: Optional[int]
    totalVictories: Optional[int]
    totalEnemies: Optional[int]
    totalBosses: Optional[float]
    likes: Optional[int]
    dislikes: Optional[int]

    class Config:
        orm_mode=True

"""
Schemas for level stats
"""
class LevelStatsCreate(BaseModel):
    id: Optional[int]
    userId : int
    levelId : int
    deaths: int
    time: int
    victories: int

    class Config:
        orm_mode=True

